import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  MessageCircle, 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle2, 
  ArrowLeft,
  Calendar,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profileService } from '@/lib/appwrite-service';

interface PageProps {
  params: {
    slug: string;
  };
}

async function getBusinessProfile(slug: string) {
  return await profileService.getProfileBySlug(slug);
}

export default async function BusinessProfilePage({ params }: PageProps) {
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }

  const business = await getBusinessProfile(slug);

  if (!business) {
    notFound();
  }

  // Handle Private State
  if (!business.is_public) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
          <CheckCircle2 className="w-full h-full text-emerald-500 relative z-10" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {business.name} is Coming Soon!
        </h1>
        <p className="text-zinc-400 max-w-md text-lg mb-8 leading-relaxed">
          This business profile is currently undergoing verification by the Locallify team. 
          Check back soon to see their cinematic presence!
        </p>
        <Link href="/">
          <Button className="bg-white text-black hover:bg-zinc-200 px-8 rounded-full font-bold transition-all">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>
        <div className="mt-16 pt-8 border-t border-zinc-900 w-full max-w-xs text-xs text-zinc-600">
          POWERED BY LOCALLIFY.IN
        </div>
      </div>
    );
  }

  // Handle Public Profile (Cinematic Design)
  const logoUrl = profileService.getFileUrl(business.logo_id);
  const coverUrl = profileService.getFileUrl(business.cover_id);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 overflow-x-hidden font-sans italic-font-none">
      {/* Dynamic Header / Hero */}
      <section className="relative h-[55vh] md:h-[75vh] w-full">
        {/* Background Layer */}
        <div className="absolute inset-0">
          <Image 
            src={coverUrl.toString()} 
            alt={business.name} 
            fill 
            sizes="100vw"
            className="object-cover opacity-70"
            priority
          />
          {/* Multi-layered Gradients for Cinematic Feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-[#050505] to-transparent"></div>
        </div>
        
        {/* Navigation Bar overlay */}
        <div className="relative z-30 max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div className="flex gap-4">
             <button className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition-all">
               <Share2 className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-40 h-full max-w-7xl mx-auto px-6 pb-20 md:pb-28 flex flex-col justify-end">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-10">
            {/* Logo with Outer Glow */}
            <div className="relative shrink-0 group z-50">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                <Image 
                  src={logoUrl.toString()} 
                  alt={business.name} 
                  fill 
                  sizes="(max-width: 768px) 128px, 192px"
                  className="object-cover" 
                />
              </div>
            </div>

            {/* Brand Title Area */}
            <div className="space-y-3 md:pb-6 z-40">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                  {business.name}
                </h1>
                {business.is_verified && (
                  <div className="bg-emerald-500 text-black px-4 py-1.5 rounded-full flex items-center gap-2 mt-2 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-4 h-4 fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Verified</span>
                  </div>
                )}
              </div>
              <p className="text-xl md:text-3xl text-emerald-400/90 font-medium tracking-tight max-w-2xl bg-black/20 backdrop-blur-sm px-4 py-1 -ml-4 rounded-xl inline-block">
                {business.tagline || business.category}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <main className="relative z-30 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 pb-32 -mt-8 md:-mt-12">
        
        {/* Left Content (About & Info) */}
        <div className="lg:col-span-8 space-y-12">
          {/* About Card */}
          <div className="bg-[#0c0c0c] border border-white/5 p-8 md:p-12 rounded-[40px] shadow-2xl space-y-8">
            <div className="space-y-4">
              <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
              <h2 className="text-3xl font-black uppercase tracking-tighter">The Vision</h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed whitespace-pre-wrap font-light">
                {business.bio}
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/10 p-6 rounded-[30px] flex items-center gap-5 group hover:border-emerald-500/30 transition-all">
                 <div className="p-4 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-all duration-500">
                   <MapPin className="w-7 h-7 text-emerald-500" />
                 </div>
                 <div className="space-y-1 min-w-0 flex-1">
                   <p className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em]">Location</p>
                   <p className="text-zinc-200 text-lg font-bold break-words whitespace-normal">{business.address || 'Silchar, Assam'}</p>
                 </div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-6 rounded-[30px] flex items-center gap-5 group hover:border-emerald-500/30 transition-all">
                 <div className="p-4 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-all duration-500">
                   <Clock className="w-7 h-7 text-emerald-500" />
                 </div>
                 <div className="space-y-1">
                   <p className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em]">Operational</p>
                   <p className="text-zinc-200 text-lg font-bold">{business.business_hours || 'Mon-Sat: 10AM-9PM'}</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Social Proof Placeholder */}
          <div className="space-y-8">
             <h2 className="text-2xl font-black uppercase tracking-tighter text-zinc-600">Visual Identity Showcase</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="aspect-[4/5] bg-[#0c0c0c] border border-white/5 rounded-3xl overflow-hidden relative group">
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-black/40 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-all">
                      <p className="text-[10px] font-bold uppercase">Moment {i}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Content (Sticky Action Card) */}
        <div className="lg:col-span-4 lg:relative">
          <div className="sticky top-12 space-y-6">
            <div className="bg-white p-8 md:p-10 rounded-[48px] text-black shadow-[0_0_80px_rgba(255,255,255,0.05)] transform hover:-translate-y-1 transition-transform duration-500">
              <h3 className="text-3xl font-[900] tracking-tighter leading-none mb-4 uppercase italic-none">
                Start your <br />
                experience
              </h3>
              <p className="text-zinc-500 font-medium mb-10 leading-snug">
                Connect directly with our team to secure your booking or learn more about our services.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/91${business.whatsapp}`} 
                  target="_blank" 
                  className="flex items-center justify-between group w-full bg-[#25D366] text-white p-5 rounded-3xl font-black tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 fill-current" />
                    MESSAGE WHATSAPP
                  </span>
                  <ArrowLeft className="w-5 h-5 rotate-180 transition-transform group-hover:translate-x-1" />
                </a>
                
                <a 
                  href={`tel:${business.phone || business.whatsapp}`} 
                  className="flex items-center justify-between group w-full bg-black text-white p-5 rounded-3xl font-black tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span className="flex items-center gap-3">
                    <Phone className="w-6 h-6 fill-current" />
                    VOICE CALL
                  </span>
                  <ArrowLeft className="w-5 h-5 rotate-180 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {business.maps_url && (
                <a 
                  href={business.maps_url} 
                  target="_blank" 
                  className="mt-8 flex items-center justify-center gap-2 w-full text-zinc-400 font-bold hover:text-black transition-colors uppercase tracking-widest text-[10px]"
                >
                  <MapPin className="w-3 h-3" /> Get Directions via Maps
                </a>
              )}
            </div>

            {/* Premium Trust Badge */}
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
              <p className="text-xs text-emerald-500/80 font-bold leading-tight uppercase tracking-tight"> Verified and Managed via the official Locallify Pages Network. </p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Bar (Mobile Only - 1-tap booking) */}
      <div className="fixed bottom-6 inset-x-6 z-[100] lg:hidden flex gap-3 pointer-events-none">
        <a 
          href={`https://wa.me/91${business.whatsapp}`} 
          className="flex-1 pointer-events-auto bg-[#25D366] text-white flex items-center justify-center p-5 rounded-2xl shadow-2xl font-black tracking-wider text-sm active:scale-95 transition-transform"
        >
          WHATSAPP
        </a>
        <a 
          href={`tel:${business.phone || business.whatsapp}`} 
          className="bg-white text-black p-5 flex items-center justify-center rounded-2xl shadow-2xl pointer-events-auto active:scale-95 transition-transform"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      <footer className="py-24 text-center border-t border-white/5">
         <Image 
           src="/logo.png" 
           alt="Locallify" 
           width={40} 
           height={40} 
           style={{ height: 'auto' }}
           className="mx-auto opacity-20 invert transition-opacity hover:opacity-100" 
         />
         <p className="mt-8 text-[10px] text-zinc-700 tracking-[0.5em] uppercase font-black">
           POWERED BY LOCALLIFY · DIGITAL CINEMA FOR LOCAL BUSINESS
         </p>
      </footer>
    </div>
  );
}
