'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { profileService } from '@/lib/appwrite-service';
import { useBusinessStore } from '@/lib/store';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// ─── Schema ──────────────────────────────────────────────────────────────────
const formSchema = z.object({
  name:           z.string().min(2, 'Business name must be at least 2 characters.'),
  tagline:        z.string().optional(),
  category:       z.string().min(1, 'Please select a category.'),
  customCategory: z.string().optional(),
  bio:            z.string().max(1024, 'Bio must be under 1024 characters.').optional(),
  slug:           z
    .string()
    .min(3, 'Username must be at least 3 characters.')
    .regex(/^[a-z0-9-]+$/, 'Only lowercase letters, numbers, and hyphens allowed.'),
  whatsapp:       z.string().min(10, 'WhatsApp number must be at least 10 digits.'),
  phone:          z.string().optional(),
  address:        z.string().optional(),
  business_hours: z.string().optional(),
  maps_url:       z
    .string()
    .refine((v) => v === '' || v.startsWith('http'), {
      message: 'Please enter a valid URL starting with http/https',
    })
    .optional(),
  theme: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// ─── Constants ────────────────────────────────────────────────────────────────
const CATEGORIES = ['Fashion', 'Education', 'Health', 'Fitness', 'Restaurant', 'Salon', 'Other'];
const THEMES = [
  { id: 'cinematic', name: 'Cinematic' },
  { id: 'glass',    name: 'Glassmorphism' },
  { id: 'minimal',  name: 'Minimal' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function OnboardingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [isSlugChecking, setIsSlugChecking] = useState(false);
  const [slugStatus, setSlugStatus] = useState<'idle' | 'available' | 'taken' | 'error'>('idle');

  const { addProfileToState } = useBusinessStore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:           '',
      slug:           '',
      category:       '',
      whatsapp:       '',
      tagline:        '',
      bio:            '',
      phone:          '',
      address:        '',
      business_hours: '',
      maps_url:       '',
      theme:          'cinematic',
    },
  });

  const watchedSlug = watch('slug');

  // ─── Slug check ──────────────────────────────────────────────────────────
  const checkSlug = async (slug: string) => {
    if (!slug || slug.length < 3) { setSlugStatus('idle'); return; }
    setIsSlugChecking(true);
    const status = await profileService.checkSlugAvailability(slug);
    setSlugStatus(status as 'idle' | 'available' | 'taken' | 'error');
    setIsSlugChecking(false);
  };

  // ─── Submit ──────────────────────────────────────────────────────────────
  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    if (slugStatus === 'taken') {
      toast.error('This username is already taken. Please choose another one.');
      return;
    }

    try {
      setLoading(true);

      const finalCategory =
        values.category === 'Other' ? values.customCategory || 'Others' : values.category;

      const profileData = {
        name:           values.name,
        tagline:        values.tagline        || '',
        slug:           values.slug.toLowerCase(),
        category:       finalCategory,
        bio:            values.bio            || '',
        whatsapp:       values.whatsapp,
        phone:          values.phone          || '',
        address:        values.address        || '',
        business_hours: values.business_hours || '',
        maps_url:       values.maps_url       || '',
        theme:          values.theme          || 'cinematic',
      };

      const newProfile = await profileService.createProfile(profileData, logoFile, coverFile);

      if (newProfile.is_public) addProfileToState(newProfile);

      toast.success('Profile submitted! Admin will verify and publish it shortly.');
      setTimeout(() => router.push('/'), 3000);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || 'Failed to create business profile.');
    } finally {
      setLoading(false);
    }
  };

  // ─── Render ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" richColors />
      <Card className="max-w-2xl mx-auto border-zinc-200 shadow-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">Register Your Business</CardTitle>
          <CardDescription>
            Fill in the details below to get your own{' '}
            <span className="font-semibold text-zinc-700">locallify.in/[username]</span>. The Locallify team will verify and publish it.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Business Name */}
            <div className="grid gap-2">
              <Label htmlFor="name">Business Name *</Label>
              <Input id="name" placeholder="e.g. Trendy Salon" {...register('name')} />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            {/* Username / Slug */}
            <div className="grid gap-2">
              <Label htmlFor="slug">Your Locallify Username *</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-zinc-400 text-sm select-none">locallify.in/</span>
                <Input
                  id="slug"
                  className="pl-[88px]"
                  placeholder="sharma-hardware"
                  {...register('slug')}
                  onBlur={(e) => checkSlug(e.target.value)}
                />
              </div>

              {/* Slug Status */}
              <div className="h-5 flex items-center gap-2">
                {isSlugChecking && (
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <Loader2 className="w-3 h-3 animate-spin" /> Checking…
                  </span>
                )}
                {!isSlugChecking && slugStatus === 'available' && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Username available!
                  </span>
                )}
                {!isSlugChecking && slugStatus === 'taken' && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-red-500">
                    <AlertCircle className="w-3.5 h-3.5" /> Username already taken.
                  </span>
                )}
              </div>

              <p className="text-[10px] text-zinc-400">Only lowercase letters, numbers, and hyphens.</p>
              {errors.slug && <p className="text-sm text-red-500">{errors.slug.message}</p>}
            </div>

            {/* Tagline */}
            <div className="grid gap-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input id="tagline" placeholder="Short catchy phrase" {...register('tagline')} />
            </div>

            {/* Category */}
            <div className="grid gap-2">
              <Label>Category *</Label>
              <Select
                onValueChange={(value) => {
                  setValue('category', value, { shouldValidate: true });
                  setShowCustomCategory(value === 'Other');
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}
            </div>

            {showCustomCategory && (
              <div className="grid gap-2 animate-in slide-in-from-top-2 duration-300">
                <Label htmlFor="customCategory">Specify Category *</Label>
                <Input id="customCategory" placeholder="e.g. Interior Design" {...register('customCategory')} />
              </div>
            )}

            {/* Bio */}
            <div className="grid gap-2">
              <Label htmlFor="bio">Business Bio</Label>
              <Textarea id="bio" placeholder="Tell us about your business..." rows={4} {...register('bio')} />
              {errors.bio && <p className="text-sm text-red-500">{errors.bio.message}</p>}
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                <Input id="whatsapp" placeholder="9876543210" {...register('whatsapp')} />
                {errors.whatsapp && <p className="text-sm text-red-500">{errors.whatsapp.message}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" placeholder="9876543210" {...register('phone')} />
              </div>
            </div>

            {/* Address & Hours */}
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Store location" {...register('address')} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="business_hours">Business Hours</Label>
                <Textarea
                  id="business_hours"
                  placeholder="e.g. Mon–Sat: 9 AM–8 PM, Sun: Closed"
                  rows={2}
                  {...register('business_hours')}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="maps_url">Google Maps URL</Label>
                <Input id="maps_url" placeholder="https://goo.gl/maps/..." {...register('maps_url')} />
                {errors.maps_url && <p className="text-sm text-red-500">{errors.maps_url.message}</p>}
              </div>
            </div>

            {/* Media */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-100">
              <div className="grid gap-2">
                <Label htmlFor="logo">Business Logo</Label>
                <Input id="logo" type="file" accept="image/*" onChange={(e) => setLogoFile(e.target.files?.[0] || null)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cover">Cover Photo</Label>
                <Input id="cover" type="file" accept="image/*" onChange={(e) => setCoverFile(e.target.files?.[0] || null)} />
              </div>
            </div>

            {/* Theme */}
            <div className="grid gap-2">
              <Label>Design Theme</Label>
              <Select onValueChange={(v) => setValue('theme', v)} defaultValue="cinematic">
                <SelectTrigger>
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  {THEMES.map((t) => (
                    <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full bg-zinc-900 text-white text-sm font-bold py-6" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</span>
              ) : (
                'Submit Profile for Verification →'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <p className="mt-8 text-center text-xs text-zinc-400">© 2026 Locallify · All rights reserved.</p>
    </div>
  );
}
