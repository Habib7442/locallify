import React from "react";

// Small, code-only illustrative visuals for each /services/[slug] detail page.
// No image assets required — kept consistent with the rest of the site's
// terminal/dashboard aesthetic.

export function SoftwareSaaSGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-xs space-y-2 text-[10px]">
        <div className="bg-bg-elevated border border-border-default rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-accent-primary/10 border-b border-border-default">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
            <span className="text-accent-primary tracking-wider uppercase">tbl_users</span>
          </div>
          {[["id", "uuid", "PK"], ["name", "varchar(80)", ""], ["email", "text", "UNIQUE"], ["role_id", "uuid", "FK"]].map(([col, type, tag]) => (
            <div key={col} className="flex items-center justify-between px-3 py-1.5 border-b border-border-default/40 last:border-0">
              <span className="text-text-secondary">{col}</span>
              <span className="text-text-muted">{type}</span>
              {tag && <span className="text-[8px] bg-accent-primary/15 text-accent-primary rounded px-1.5 py-0.5">{tag}</span>}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="w-px h-4 bg-border-default" />
        </div>
        <div className="bg-bg-elevated border border-border-default rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-cyan-400/10 border-b border-border-default">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 tracking-wider uppercase">tbl_roles</span>
          </div>
          {[["id", "uuid", "PK"], ["name", "varchar(40)", ""], ["permissions", "jsonb", ""]].map(([col, type, tag]) => (
            <div key={col} className="flex items-center justify-between px-3 py-1.5 border-b border-border-default/40 last:border-0">
              <span className="text-text-secondary">{col}</span>
              <span className="text-text-muted">{type}</span>
              {tag && <span className="text-[8px] bg-cyan-400/15 text-cyan-400 rounded px-1.5 py-0.5">{tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WebAppsGraphic() {
  const bars = [38, 55, 42, 70, 62, 88, 76, 95];
  return (
    <div className="w-full h-full flex flex-col justify-center p-5 font-mono gap-4">
      <div className="grid grid-cols-3 gap-2">
        {[["14ms", "Latency"], ["99.8%", "Uptime"], ["98", "Perf"]].map(([val, label]) => (
          <div key={label} className="bg-bg-elevated border border-border-default rounded-xl p-2.5 text-center">
            <div className="text-accent-primary font-sans font-bold text-base leading-none mb-1">{val}</div>
            <div className="text-text-muted text-[9px] uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </div>
      <div className="bg-bg-elevated border border-border-default rounded-xl p-3">
        <div className="text-[9px] text-text-muted uppercase tracking-wider mb-3">Weekly Traffic</div>
        <div className="flex items-end gap-1.5 h-16">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <div
                className="w-full rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i === bars.length - 1 ? "var(--accent-primary)" : "rgba(208,255,20,0.2)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full mt-1">
        <div className="flex gap-2">
          <span className="text-[9px] bg-bg-elevated border border-border-default rounded-full px-2.5 py-1 text-text-muted">Next.js 16</span>
          <span className="text-[9px] bg-bg-elevated border border-border-default rounded-full px-2.5 py-1 text-text-muted">React 19</span>
          <span className="text-[9px] bg-bg-elevated border border-border-default rounded-full px-2.5 py-1 text-text-muted">Edge Runtime</span>
        </div>
        <span className="text-[8px] text-text-muted/50 uppercase tracking-widest shrink-0">*Illustrative data</span>
      </div>
    </div>
  );
}

export function MobileAppsGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative w-44 h-full max-h-72 bg-bg-elevated border-2 border-border-default rounded-[28px] overflow-hidden shadow-2xl flex flex-col">
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-16 h-1.5 bg-bg-surface rounded-full" />
        </div>
        <div className="px-3 pt-1 flex-1 overflow-hidden space-y-2">
          <div className="flex items-center gap-2 pb-2 border-b border-border-default/40">
            <div className="w-7 h-7 rounded-full bg-accent-primary/20 border border-accent-primary/30 flex items-center justify-center">
              <span className="text-accent-primary text-[8px] font-bold">AB</span>
            </div>
            <div>
              <div className="text-[9px] text-text-primary font-medium">Arjun Mehta</div>
              <div className="text-[8px] text-text-muted">@arjun.m</div>
            </div>
          </div>
          {[
            { w: "w-full", h: "h-16", color: "bg-purple-400/15 border-purple-400/20" },
            { w: "w-11/12", h: "h-12", color: "bg-accent-primary/10 border-accent-primary/20" },
          ].map((item, i) => (
            <div key={i} className={`${item.w} ${item.h} rounded-xl border ${item.color} p-2 flex flex-col justify-between`}>
              <div className="w-3/4 h-1.5 bg-bg-surface rounded-full" />
              <div className="flex gap-1.5">
                <div className="w-8 h-1 bg-bg-surface/60 rounded-full" />
                <div className="w-6 h-1 bg-bg-surface/60 rounded-full" />
              </div>
            </div>
          ))}
          <div className="flex gap-1 flex-wrap pt-1">
            {["Like", "Share", "Save"].map((tag) => (
              <span key={tag} className="text-[8px] bg-bg-surface border border-border-default/60 rounded-full px-2 py-0.5 text-text-muted">{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-around items-center py-2.5 border-t border-border-default bg-bg-surface">
          {["⌂", "◎", "✦", "◷"].map((icon, i) => (
            <span key={i} className={`text-sm ${i === 0 ? "text-accent-primary" : "text-text-muted"}`}>{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SEOGraphic() {
  const points = [0, 5, 8, 14, 20, 32, 52, 80, 100];
  const svgW = 200, svgH = 80;
  const pathD = points.map((v, i) => {
    const x = (i / (points.length - 1)) * svgW;
    const y = svgH - (v / 100) * svgH;
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  }).join(" ");

  return (
    <div className="w-full h-full flex flex-col justify-center p-5 gap-4 font-mono">
      <div className="bg-bg-elevated border border-border-default rounded-xl p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] text-text-muted uppercase tracking-wider">Search Performance</span>
          <span className="text-[8px] text-semantic-good bg-semantic-good/10 rounded-full px-2 py-0.5">▲ 312%</span>
        </div>
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-16" preserveAspectRatio="none">
          <defs>
            <linearGradient id="seoGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={pathD + ` L${svgW},${svgH} L0,${svgH} Z`} fill="url(#seoGrad)" />
          <path d={pathD} fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {[["100", "Perf"], ["100", "SEO"], ["99", "A11y"], ["100", "BP"]].map(([score, label]) => (
          <div key={label} className="bg-bg-elevated border border-border-default rounded-lg p-2 text-center">
            <div className="text-semantic-good font-sans font-bold text-xs leading-none mb-1">{score}</div>
            <div className="text-[8px] text-text-muted">{label}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 mt-1">
        <div className="flex-1 bg-accent-secondary/10 border border-accent-secondary/25 rounded-xl px-3 py-2 text-[9px] text-accent-secondary">
          ✦ Featured in AI Overview · locallifyagency.com
        </div>
        <span className="text-[8px] text-text-muted/50 uppercase tracking-widest shrink-0">*Illustrative data</span>
      </div>
    </div>
  );
}

export function AutomationGraphic() {
  const nodes = [
    { label: "Webhook Trigger", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/30" },
    { label: "n8n Splitter", color: "text-accent-primary", bg: "bg-accent-primary/10 border-accent-primary/30" },
    { label: "Email Notify", color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/30" },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-2 font-mono">
      <div className="text-[9px] text-text-muted uppercase tracking-widest mb-2">Automation Flow</div>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <div className={`flex items-center gap-2 border ${node.bg} rounded-xl px-4 py-3 w-full max-w-xs`}>
            <span className={`w-2 h-2 rounded-full ${node.color} bg-current animate-pulse motion-reduce:animate-none`} style={{ animationDelay: `${i * 0.3}s` }} />
            <span className={`text-[10px] ${node.color} font-medium tracking-wide`}>{node.label}</span>
          </div>
          {i < nodes.length - 1 && (
            <div className="flex flex-col items-center gap-0.5">
              {[0, 1, 2].map((d) => (
                <div key={d} className="w-px h-1.5 bg-border-default" />
              ))}
              <div className="w-1.5 h-1.5 border-r border-b border-border-default rotate-45 -mt-0.5" />
            </div>
          )}
        </React.Fragment>
      ))}
      <div className="grid grid-cols-3 gap-2 w-full mt-3">
        {[["4.2k", "Runs/day"], ["99.7%", "Success"], ["0", "Errors"]].map(([v, l]) => (
          <div key={l} className="bg-bg-elevated border border-border-default rounded-lg p-2 text-center">
            <div className="text-text-primary font-sans font-bold text-xs">{v}</div>
            <div className="text-[8px] text-text-muted mt-0.5">{l}</div>
          </div>
        ))}
      </div>
      <div className="w-full text-right mt-1">
        <span className="text-[8px] text-text-muted/50 uppercase tracking-widest">*Illustrative data</span>
      </div>
    </div>
  );
}

export function AIVoiceGraphic() {
  const waveform = [20, 45, 30, 65, 90, 55, 75, 40, 60, 85, 35, 50];
  return (
    <div className="w-full h-full flex flex-col justify-center p-5 gap-4 font-mono">
      <div className="bg-bg-elevated border border-border-default rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] text-text-muted uppercase tracking-wider">Live call · Intake Agent</span>
          <span className="flex items-center gap-1.5 text-[8px] text-semantic-good">
            <span className="w-1.5 h-1.5 rounded-full bg-semantic-good animate-pulse motion-reduce:animate-none" />
            00:42
          </span>
        </div>
        <div className="flex items-end justify-center gap-1 h-14">
          {waveform.map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full"
              style={{
                height: `${h}%`,
                background: i % 3 === 0 ? "var(--accent-primary)" : "rgba(168,85,247,0.35)",
              }}
            />
          ))}
        </div>
      </div>
      <div className="space-y-2 text-[9px]">
        <div className="bg-bg-elevated border border-border-default rounded-lg px-3 py-2 text-text-secondary">
          <span className="text-purple-400 font-semibold">Caller:</span> &quot;Do you have a slot tomorrow morning?&quot;
        </div>
        <div className="bg-purple-400/10 border border-purple-400/25 rounded-lg px-3 py-2 text-text-secondary">
          <span className="text-purple-300 font-semibold">Agent:</span> &quot;Yes — 9:30 or 11:00 AM. Booking it now.&quot;
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[["1.2s", "Response"], ["24/7", "Coverage"], ["100%", "Logged to CRM"]].map(([v, l]) => (
          <div key={l} className="bg-bg-elevated border border-border-default rounded-lg p-2 text-center">
            <div className="text-purple-400 font-sans font-bold text-xs">{v}</div>
            <div className="text-[8px] text-text-muted mt-0.5">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductSystemsGraphic() {
  const swatches = ["#D0FF14", "#22D3EE", "#A855F7", "#F97316", "#34D399"];
  return (
    <div className="w-full h-full flex flex-col justify-center p-5 gap-4 font-mono">
      <div className="bg-bg-elevated border border-border-default rounded-xl p-3">
        <div className="text-[9px] text-text-muted uppercase tracking-wider mb-3">Design Tokens</div>
        <div className="flex items-center gap-2">
          {swatches.map((c) => (
            <div key={c} className="w-7 h-7 rounded-lg border border-border-default" style={{ background: c }} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[["Button", "12px radius"], ["Card", "24px radius"], ["Input", "44px height"], ["Modal", "40px radius"]].map(([name, spec]) => (
          <div key={name} className="bg-bg-elevated border border-border-default rounded-lg p-2.5">
            <div className="text-text-secondary text-[9px] font-semibold">{name}</div>
            <div className="text-text-muted text-[8px] mt-0.5">{spec}</div>
          </div>
        ))}
      </div>
      <div className="bg-bg-elevated border border-border-default rounded-xl p-3">
        <div className="text-[9px] text-text-muted uppercase tracking-wider mb-2">Component Library</div>
        <div className="flex flex-wrap gap-1.5">
          {["Navbar", "Table", "Chart", "Toast", "Modal", "Badge", "Form"].map((c) => (
            <span key={c} className="text-[8px] bg-bg-surface border border-border-default/60 rounded-full px-2 py-1 text-text-muted">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
