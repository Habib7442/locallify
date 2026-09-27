"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Hides a "Get my free audit" shortcut while the audit form itself is on
 * screen, so visitors don't see the same button two or three times at once.
 * Hidden content is inert: not clickable and not reachable by keyboard.
 */
export default function HideWhileAuditVisible({ children, className }: { children: ReactNode; className?: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const form = document.getElementById("audit");
    if (!form) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "transition-all duration-300 motion-reduce:transition-none",
        hidden && "pointer-events-none translate-y-2 opacity-0",
        className
      )}
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}
    >
      {children}
    </div>
  );
}
