import { useState } from "react";

const C = {
  primary: "#1B6B4A",
  primaryLight: "#E8F5EE",
  primaryMid: "#D1FAE5",
  secondary: "#2563EB",
  secondaryLight: "#EFF6FF",
  warm: "#D97706",
  warmLight: "#FEF3C7",
  text1: "#1A1A1A",
  text2: "#6B7280",
  text3: "#9CA3AF",
  bg1: "#FFFFFF",
  bg2: "#F9FAFB",
  bg3: "#F3F4F6",
  border: "#E5E7EB",
  borderSub: "#F3F4F6",
  success: "#059669",
  successLight: "#ECFDF5",
  caution: "#D97706",
  cautionLight: "#FFFBEB",
  danger: "#DC2626",
  dangerLight: "#FEF2F2",
  teal: "#0D9488",
  tealLight: "#CCFBF1",
  purple: "#7C3AED",
  purpleLight: "#EDE9FE",
  coral: "#EA580C",
  coralLight: "#FFF7ED",
  blue: "#2563EB",
  blueLight: "#DBEAFE",
};

const goals = [
  { id: "sleep", label: "Sleep & Recovery", icon: "🌙", color: C.secondary, colorLight: C.secondaryLight, desc: "Improve sleep quality, reduce recovery time, support circadian rhythm" },
  { id: "cognitive", label: "Cognitive Performance", icon: "🧠", color: C.purple, colorLight: C.purpleLight, desc: "Enhance focus, memory, neuroprotection, mental clarity" },
  { id: "gut", label: "Gut Health", icon: "🫧", color: C.primary, colorLight: C.primaryLight, desc: "Support gut lining repair, microbiome balance, digestion" },
  { id: "immunity", label: "Immunity & Longevity", icon: "🛡", color: C.teal, colorLight: C.tealLight, desc: "Strengthen immune response, reduce inflammation, healthy aging" },
  { id: "skin", label: "Skin & Tissue Repair", icon: "✦", color: C.coral, colorLight: C.coralLight, desc: "Accelerate wound healing, improve elasticity, reduce scarring" },
  { id: "stress", label: "Stress & Mood", icon: "☀", color: C.warm, colorLight: C.warmLight, desc: "Regulate cortisol, emotional resilience, calm anxiety" },
];

const peptides = [
  {
    id: "bpc157", name: "BPC-157", fullName: "Body Protection Compound-157", sequence: "GEPPPGKPADDAGLV",
    summary: "A naturally occurring peptide found in gastric juice that supports tissue repair, gut healing, and may improve sleep through gut-brain axis modulation.",
    evidenceScore: 82, studyCount: 47, humanStudies: 8, animalStudies: 31, inVitro: 8,
    tags: ["Gut-brain", "Anti-inflammatory", "Tissue repair"],
    confidence: "strong",
    molecularWeight: "1419.53 g/mol",
    halfLife: "Stable in gastric juice",
    bioavailability: "Oral and subcutaneous",
    origin: "Gastric juice (naturally occurring)",
    dosage: {
      standard: "250–500 mcg",
      frequency: "1–2x daily",
      cycle: "4–6 weeks on, 2 weeks off",
      routes: [
        { route: "Subcutaneous injection", note: "Most studied route, highest bioavailability" },
        { route: "Oral (capsule)", note: "Effective for GI-specific targets, lower systemic absorption" },
        { route: "Topical", note: "Limited data, used for localized tissue repair" },
      ],
    },
    benefits: [
      { label: "Gut lining repair", strength: 92, desc: "Restores intestinal barrier integrity and tight junction proteins" },
      { label: "Tendon & ligament healing", strength: 85, desc: "Accelerates collagen deposition and tissue remodeling" },
      { label: "Anti-inflammatory", strength: 80, desc: "Reduces TNF-α, IL-6, and other pro-inflammatory cytokines" },
      { label: "Neuroprotective", strength: 65, desc: "May protect against serotonin and dopamine system disruption" },
      { label: "Sleep quality (indirect)", strength: 55, desc: "Gut-brain axis improvements may positively affect sleep architecture" },
    ],
    sideEffects: [
      { label: "Mild nausea", frequency: "Uncommon", severity: "low" },
      { label: "Injection site irritation", frequency: "Occasional", severity: "low" },
      { label: "Dizziness", frequency: "Rare", severity: "low" },
      { label: "GI discomfort (oral)", frequency: "Uncommon", severity: "low" },
    ],
    mechanism: [
      { stage: "Intake", title: "Enters the body", desc: "BPC-157 is administered orally or via injection. It survives stomach acid due to its gastric origin.", color: C.secondary, colorLight: C.secondaryLight },
      { stage: "Binding", title: "Activates GH receptors", desc: "Binds to growth hormone releasing receptors in the gut lining, triggering a repair cascade.", color: C.primary, colorLight: C.primaryLight },
      { stage: "Signaling", title: "FAK-paxillin pathway", desc: "Activates the FAK-paxillin signaling pathway, which controls cell migration and tissue formation.", color: C.teal, colorLight: C.tealLight },
      { stage: "Response", title: "Angiogenesis begins", desc: "Promotes formation of new blood vessels in damaged tissue. Increases VEGF and NO production.", color: C.warm, colorLight: C.warmLight },
      { stage: "Repair", title: "Tissue healing", desc: "Reduces TNF-α and IL-6 inflammation. Supports collagen formation and gut barrier integrity.", color: C.coral, colorLight: C.coralLight },
      { stage: "Outcome", title: "Systemic benefits", desc: "Restored gut health improves nutrient absorption, reduces systemic inflammation, supports sleep via gut-brain axis.", color: C.purple, colorLight: C.purpleLight },
    ],
    mechanismSystems: [
      { system: "Gastrointestinal", effect: "Primary target — repairs mucosal lining, restores tight junctions, reduces inflammation", status: "primary" },
      { system: "Musculoskeletal", effect: "Accelerates tendon, ligament, and muscle healing through increased blood flow", status: "strong" },
      { system: "Nervous system", effect: "Neuroprotective effects — may modulate dopamine and serotonin turnover", status: "moderate" },
      { system: "Cardiovascular", effect: "Promotes angiogenesis (new blood vessel formation) in injured tissue", status: "strong" },
      { system: "Immune system", effect: "Anti-inflammatory — reduces TNF-α, IL-6, and other cytokines", status: "strong" },
    ],
    stacking: [
      { peptide: "TB-500", reason: "Complementary tissue repair — TB-500 promotes cell migration while BPC-157 promotes angiogenesis" },
      { peptide: "GHK-Cu", reason: "Collagen synthesis support — GHK-Cu enhances skin and tissue remodeling alongside BPC-157's repair cascade" },
    ],
    studies: [
      { title: "BPC-157 promotes tendon-to-bone healing in a rat rotator cuff model", year: 2023, type: "Animal", typeColor: C.warm, sampleSize: 48, finding: "Significant improvement in tendon-to-bone healing strength compared to control group after 8 weeks.", confidence: "moderate" },
      { title: "Gastric pentadecapeptide BPC-157 in healing of abdominal anastomosis", year: 2022, type: "RCT", typeColor: C.success, sampleSize: 120, finding: "Patients receiving BPC-157 showed 40% faster anastomosis healing with reduced complication rates.", confidence: "high" },
      { title: "Cytoprotective effects of BPC-157 on intestinal epithelial barrier function", year: 2023, type: "In vitro", typeColor: C.secondary, sampleSize: null, finding: "BPC-157 restored tight junction protein expression in damaged intestinal cell cultures within 24 hours.", confidence: "moderate" },
      { title: "Systematic review of BPC-157 effects on inflammatory markers", year: 2024, type: "Meta-analysis", typeColor: C.primary, sampleSize: 1200, finding: "Pooled analysis of 23 studies shows consistent reduction in TNF-α and IL-6 across all administration routes.", confidence: "high" },
      { title: "Oral BPC-157 stability and gastric protection mechanisms", year: 2021, type: "Animal", typeColor: C.warm, sampleSize: 36, finding: "Oral BPC-157 demonstrated gastric cytoprotection and maintained peptide integrity through gastric passage.", confidence: "moderate" },
    ],
    quickSummary: [
      "Strong evidence for gut lining repair and tissue healing across 47 studies",
      "Most evidence from animal studies, with growing human trial data (8 RCTs)",
      "Works through promoting new blood vessel growth (angiogenesis) and reducing inflammation",
      "Multiple administration routes — subcutaneous injection is most studied",
      "Generally well-tolerated with minimal reported side effects",
    ],
  },
  {
    id: "tb500", name: "TB-500", fullName: "Thymosin Beta-4 Fragment", sequence: "LKKTETQ",
    summary: "A synthetic version of thymosin beta-4 that promotes cell migration, wound healing, and recovery from muscle and joint injuries.",
    evidenceScore: 68, studyCount: 31, humanStudies: 5, animalStudies: 20, inVitro: 6,
    tags: ["Cell migration", "Wound healing", "Recovery"], confidence: "moderate",
    molecularWeight: "4963 g/mol", halfLife: "~6 days", bioavailability: "Subcutaneous", origin: "Synthetic (thymus-derived)",
  },
  {
    id: "ghkcu", name: "GHK-Cu", fullName: "Copper Peptide GHK-Cu", sequence: "GHK",
    summary: "A copper-binding tripeptide that declines with age and supports skin remodeling, collagen synthesis, and antioxidant enzyme production.",
    evidenceScore: 74, studyCount: 38, humanStudies: 12, animalStudies: 18, inVitro: 8,
    tags: ["Collagen synthesis", "Antioxidant", "Anti-aging"], confidence: "strong",
    molecularWeight: "340.38 g/mol", halfLife: "~30 min (serum)", bioavailability: "Topical, subcutaneous", origin: "Naturally occurring (human plasma)",
  },
  {
    id: "ta1", name: "Thymosin Alpha-1", fullName: "Thymosin Alpha-1", sequence: "SDAAVDTSSEITTKDLKEKKEVVEEAEN",
    summary: "An immune-modulating peptide that enhances T-cell function and has been used clinically for hepatitis and immune deficiency conditions.",
    evidenceScore: 91, studyCount: 86, humanStudies: 34, animalStudies: 38, inVitro: 14,
    tags: ["Immune modulation", "T-cell support", "Antiviral"], confidence: "strong",
    molecularWeight: "3108.28 g/mol", halfLife: "~2 hours", bioavailability: "Subcutaneous", origin: "Synthetic (thymus-derived)",
  },
];

const recentActivity = [
  { text: "You saved a study on BPC-157", time: "2h ago", dot: C.primary },
  { text: "New clinical trial added for TB-500", time: "5h ago", dot: C.secondary },
  { text: "Sleep & Recovery report ready", time: "1d ago", dot: C.warm },
  { text: "GHK-Cu mechanism view updated", time: "2d ago", dot: C.teal },
];

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "⬡" },
  { id: "explore", label: "Explore", icon: "◎" },
  { id: "research", label: "My Research", icon: "◈" },
  { id: "saved", label: "Saved", icon: "♡" },
  { id: "reports", label: "Reports", icon: "▤" },
];

const aiSuggestions = [
  "Which peptides help with gut repair?",
  "Compare BPC-157 and TB-500",
  "Safest peptide for beginners?",
  "Peptides for sleep improvement",
];

function Sidebar({ screen, onNav }) {
  const active = screen === "dashboard" ? "dashboard" : screen === "goals" || screen === "results" || screen === "study" || screen === "mechanism" ? "explore" : screen === "report" ? "reports" : screen === "figma" ? null : "dashboard";
  return (
    <div style={{ width: 232, minHeight: "100vh", borderRight: `1px solid ${C.border}`, background: C.bg1, display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <div style={{ padding: "20px 16px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 30, height: 30, borderRadius: 8, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 500 }}>P</div>
        <span style={{ fontSize: 16, fontWeight: 500, color: C.text1, letterSpacing: -0.3 }}>PeptideAI</span>
      </div>
      <nav style={{ flex: 1, padding: "4px 10px", display: "flex", flexDirection: "column", gap: 1 }}>
        {navItems.map(item => {
          const isA = active === item.id;
          return (
            <button key={item.id} onClick={() => { if (item.id === "dashboard") onNav("dashboard"); else if (item.id === "explore") onNav("goals"); else if (item.id === "reports") onNav("report"); }}
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 7, border: "none", cursor: "pointer", background: isA ? C.primaryLight : "transparent", color: isA ? C.primary : C.text2, fontSize: 13.5, fontWeight: isA ? 500 : 400, width: "100%", textAlign: "left", borderLeft: isA ? `2.5px solid ${C.primary}` : "2.5px solid transparent", transition: "all .15s" }}>
              <span style={{ fontSize: 14, width: 18, textAlign: "center" }}>{item.icon}</span>{item.label}
            </button>
          );
        })}
        <div style={{ marginTop: 16, padding: "0 4px" }}>
          <button onClick={() => onNav("figma")} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", borderRadius: 7, border: `1px dashed ${C.border}`, cursor: "pointer", background: screen === "figma" ? C.purpleLight : "transparent", color: screen === "figma" ? C.purple : C.text3, fontSize: 12.5, fontWeight: 500, width: "100%", textAlign: "left" }}>
            <span style={{ fontSize: 13 }}>◻</span>Figma board notes
          </button>
        </div>
      </nav>
      <div style={{ padding: "14px 16px", borderTop: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 9 }}>
        <div style={{ width: 30, height: 30, borderRadius: "50%", background: C.bg3, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: C.text2, fontWeight: 500 }}>JD</div>
        <div><div style={{ fontSize: 12.5, fontWeight: 500, color: C.text1 }}>Jane Doe</div><div style={{ fontSize: 11, color: C.text3 }}>Researcher</div></div>
      </div>
    </div>
  );
}

function BC({ items }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, color: C.text3, marginBottom: 24 }}>
      {items.map((b, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
          {i > 0 && <span>→</span>}
          <span onClick={b.onClick} style={{ cursor: b.onClick ? "pointer" : "default", color: i === items.length - 1 ? C.text1 : b.onClick ? C.secondary : C.text3, fontWeight: i === items.length - 1 ? 500 : 400 }}>{b.label}</span>
        </span>
      ))}
    </div>
  );
}

function Tag({ label, color, bg }) {
  return <span style={{ display: "inline-block", padding: "2.5px 9px", borderRadius: 100, fontSize: 11.5, fontWeight: 500, background: bg || C.bg3, color: color || C.text2 }}>{label}</span>;
}

function EvBar({ score, count, compact }) {
  const color = score > 75 ? C.primary : score > 50 ? C.warm : C.danger;
  const label = score > 75 ? "Strong" : score > 50 ? "Moderate" : "Early";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
      <div style={{ flex: 1, height: compact ? 4 : 5, borderRadius: 100, background: C.bg3, overflow: "hidden" }}>
        <div style={{ width: `${score}%`, height: "100%", borderRadius: 100, background: color, transition: "width .5s ease" }} />
      </div>
      <span style={{ fontSize: 11.5, color: C.text2, whiteSpace: "nowrap" }}>{label} — {count} studies</span>
    </div>
  );
}

function MS({ value, label, color }) {
  return (
    <div style={{ textAlign: "center", flex: 1, padding: "10px 4px", background: C.bg1, borderRadius: 8 }}>
      <div style={{ fontSize: 18, fontWeight: 500, color: color || C.text1 }}>{value}</div>
      <div style={{ fontSize: 10.5, color: C.text3, marginTop: 2 }}>{label}</div>
    </div>
  );
}

function HoverCard({ children, onClick, style: s }) {
  return (
    <div onClick={onClick} style={{ ...s, cursor: "pointer", transition: "all .15s" }}
      onMouseOver={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.background = C.primaryLight; }}
      onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = s?.background || "transparent"; }}>
      {children}
    </div>
  );
}

// ===== DASHBOARD =====
function Dashboard({ onNav }) {
  const [q, setQ] = useState("");
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 500, color: C.text1, margin: 0, letterSpacing: -0.4 }}>Good morning, Jane</h1>
        <p style={{ fontSize: 14, color: C.text2, margin: "4px 0 0" }}>Here's what's new in peptide research</p>
      </div>
      {/* AI Search */}
      <div style={{ padding: 20, borderRadius: 10, background: C.primaryLight, border: `1px solid ${C.primary}15`, marginBottom: 22 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: C.primary, marginBottom: 3 }}>Ask PeptideAI</div>
        <div style={{ fontSize: 12.5, color: C.text2, marginBottom: 10 }}>Research any peptide, compare options, or get protocol guidance</div>
        <div style={{ display: "flex", gap: 8 }}>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="e.g. Which peptides help with gut repair and sleep?" style={{ flex: 1, padding: "9px 14px", borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 13, color: C.text1, background: C.bg1, outline: "none" }} />
          <button style={{ padding: "9px 18px", borderRadius: 8, border: "none", background: C.primary, color: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Search</button>
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 9, flexWrap: "wrap" }}>
          {aiSuggestions.map(s => (
            <button key={s} onClick={() => setQ(s)} style={{ padding: "4px 10px", borderRadius: 100, border: `1px solid ${C.border}`, background: C.bg1, fontSize: 11, color: C.text2, cursor: "pointer" }}>{s}</button>
          ))}
        </div>
      </div>
      {/* Stats */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        {[{ v: "12", l: "Saved peptides", c: C.primary }, { v: "47", l: "Studies tracked", c: C.secondary }, { v: "3", l: "Active goals", c: C.teal }, { v: "8", l: "New this week", c: C.warm }].map((s, i) => (
          <div key={i} style={{ flex: 1, padding: "14px 16px", borderRadius: 8, border: `1px solid ${C.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: s.c }} />
              <span style={{ fontSize: 22, fontWeight: 500, color: C.text1, letterSpacing: -0.5 }}>{s.v}</span>
            </div>
            <div style={{ fontSize: 12, color: C.text2 }}>{s.l}</div>
          </div>
        ))}
      </div>
      {/* Peptide Cards */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h2 style={{ fontSize: 16, fontWeight: 500, color: C.text1, margin: 0 }}>Trending peptides</h2>
          <button onClick={() => onNav("goals")} style={{ fontSize: 12.5, color: C.primary, background: "none", border: "none", cursor: "pointer", fontWeight: 500 }}>Explore all →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {peptides.slice(0, 4).map(p => (
            <HoverCard key={p.id} onClick={() => onNav("study", { peptide: p, goal: goals[0] })} style={{ padding: 18, borderRadius: 10, border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontSize: 14.5, fontWeight: 500, color: C.text1 }}>{p.name}</span>
                <span style={{ fontSize: 11, color: C.text3 }}>{p.origin || "Synthetic"}</span>
              </div>
              <p style={{ fontSize: 12.5, color: C.text2, margin: "0 0 10px", lineHeight: 1.5 }}>{p.summary.split(",")[0]}.</p>
              <EvBar score={p.evidenceScore} count={p.studyCount} compact />
              <div style={{ display: "flex", gap: 5, marginTop: 9, flexWrap: "wrap" }}>{p.tags.map(t => <Tag key={t} label={t} />)}</div>
              <div style={{ display: "flex", gap: 10, marginTop: 8, fontSize: 11, color: C.text3 }}>
                <span>{p.humanStudies} human</span><span>{p.animalStudies || "—"} animal</span><span>{p.molecularWeight || "—"}</span>
              </div>
            </HoverCard>
          ))}
        </div>
      </div>
      {/* Activity */}
      <div>
        <h2 style={{ fontSize: 16, fontWeight: 500, color: C.text1, margin: "0 0 10px" }}>Recent activity</h2>
        {recentActivity.map((a, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < recentActivity.length - 1 ? `1px solid ${C.borderSub}` : "none" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.dot, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: C.text1, flex: 1 }}>{a.text}</span>
            <span style={{ fontSize: 11.5, color: C.text3 }}>{a.time}</span>
          </div>
        ))}
      </div>
    </>
  );
}

// ===== GOALS =====
function Goals({ onNav }) {
  return (
    <>
      <BC items={[{ label: "Dashboard", onClick: () => onNav("dashboard") }, { label: "Explore" }]} />
      <div style={{ marginBottom: 26 }}>
        <h1 style={{ fontSize: 24, fontWeight: 500, color: C.text1, margin: 0 }}>What health goal are you researching?</h1>
        <p style={{ fontSize: 14, color: C.text2, margin: "4px 0 0" }}>Select a goal to see matched peptides and evidence</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {goals.map(g => (
          <HoverCard key={g.id} onClick={() => onNav("results", { goal: g })} style={{ padding: 22, borderRadius: 10, border: `1px solid ${C.border}`, background: C.bg1 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: g.colorLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 12 }}>{g.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: C.text1, marginBottom: 4 }}>{g.label}</div>
            <div style={{ fontSize: 13, color: C.text2, lineHeight: 1.5 }}>{g.desc}</div>
          </HoverCard>
        ))}
      </div>
    </>
  );
}

// ===== RESULTS =====
function Results({ onNav, goal }) {
  const [filter, setFilter] = useState("all");
  const g = goal || goals[0];
  return (
    <>
      <BC items={[{ label: "Dashboard", onClick: () => onNav("dashboard") }, { label: "Explore", onClick: () => onNav("goals") }, { label: g.label }]} />
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ fontSize: 24, fontWeight: 500, color: C.text1, margin: 0 }}>Peptides for {g.label}</h1>
        <p style={{ fontSize: 13, color: C.text2, margin: "4px 0 0" }}>{peptides.length} peptides found</p>
      </div>
      <div style={{ display: "flex", gap: 7, marginBottom: 18 }}>
        {["All", "Most studied", "Highest evidence", "Newest"].map(f => {
          const k = f.toLowerCase().replace(/ /g, ""); const isA = filter === k;
          return <button key={f} onClick={() => setFilter(k)} style={{ padding: "6px 14px", borderRadius: 100, border: "none", fontSize: 12.5, fontWeight: 500, cursor: "pointer", background: isA ? C.primary : C.bg3, color: isA ? "#fff" : C.text2 }}>{f}</button>;
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {peptides.map(p => (
          <HoverCard key={p.id} onClick={() => onNav("study", { peptide: p, goal: g })} style={{ padding: 20, borderRadius: 10, border: `1px solid ${C.border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <div><span style={{ fontSize: 15, fontWeight: 500, color: C.text1 }}>{p.name}</span><span style={{ fontSize: 12, color: C.text3, marginLeft: 8 }}>{p.fullName}</span></div>
              <span style={{ fontSize: 16, color: C.text3 }}>→</span>
            </div>
            <p style={{ fontSize: 13, color: C.text2, margin: "0 0 12px", lineHeight: 1.55 }}>{p.summary}</p>
            <EvBar score={p.evidenceScore} count={p.studyCount} />
            <div style={{ display: "flex", gap: 5, marginTop: 10 }}>{p.tags.map(t => <Tag key={t} label={t} color={C.primary} bg={C.primaryLight} />)}</div>
          </HoverCard>
        ))}
      </div>
    </>
  );
}

// ===== STUDY DEEP-DIVE =====
function Study({ onNav, peptide, goal }) {
  const [tab, setTab] = useState("overview");
  const p = peptide || peptides[0]; const g = goal || goals[0];
  const confDot = c => c === "high" ? C.success : c === "moderate" ? C.warm : C.danger;

  return (
    <>
      <BC items={[{ label: "Dashboard", onClick: () => onNav("dashboard") }, { label: "Explore", onClick: () => onNav("goals") }, { label: g.label, onClick: () => onNav("results", { goal: g }) }, { label: p.name }]} />
      <div style={{ display: "flex", gap: 22 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <h1 style={{ fontSize: 24, fontWeight: 500, color: C.text1, margin: 0 }}>{p.name}</h1>
              <Tag label={p.confidence === "strong" ? "Strong evidence" : "Moderate evidence"} color={p.confidence === "strong" ? C.success : C.warm} bg={p.confidence === "strong" ? C.successLight : C.cautionLight} />
            </div>
            <p style={{ fontSize: 12.5, color: C.text3, margin: "2px 0 0" }}>{p.fullName}</p>
            <code style={{ fontSize: 11.5, color: C.text2, background: C.bg3, padding: "2.5px 8px", borderRadius: 4, fontFamily: "'JetBrains Mono', monospace", display: "inline-block", marginTop: 6 }}>{p.sequence}</code>
          </div>

          <div style={{ display: "flex", borderBottom: `1px solid ${C.border}`, marginBottom: 16, gap: 0 }}>
            {["Overview", "Studies", "Dosage", "Mechanism", "Safety"].map(t => {
              const k = t.toLowerCase(); const isA = tab === k;
              return <button key={t} onClick={() => { if (k === "mechanism") onNav("mechanism", { peptide: p, goal: g }); else setTab(k); }}
                style={{ padding: "8px 15px", fontSize: 13, fontWeight: isA ? 500 : 400, color: isA ? C.primary : C.text2, background: "none", border: "none", borderBottom: isA ? `2px solid ${C.primary}` : "2px solid transparent", cursor: "pointer", marginBottom: -1 }}>{t}</button>;
            })}
          </div>

          {tab === "overview" && (
            <div>
              <p style={{ fontSize: 14, color: C.text2, lineHeight: 1.65, margin: "0 0 18px" }}>{p.summary}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
                {[{ l: "Molecular weight", v: p.molecularWeight || "—" }, { l: "Half-life", v: p.halfLife || "—" }, { l: "Bioavailability", v: p.bioavailability || "—" }, { l: "Origin", v: p.origin || "—" }].map((s, i) => (
                  <div key={i} style={{ padding: "12px 14px", borderRadius: 8, background: C.bg2, border: `1px solid ${C.borderSub}` }}>
                    <div style={{ fontSize: 10.5, color: C.text3, marginBottom: 3, textTransform: "uppercase", letterSpacing: 0.4, fontWeight: 500 }}>{s.l}</div>
                    <div style={{ fontSize: 13, color: C.text1, fontWeight: 500 }}>{s.v}</div>
                  </div>
                ))}
              </div>
              {p.benefits && (<div style={{ marginBottom: 18 }}>
                <h3 style={{ fontSize: 14, fontWeight: 500, color: C.text1, margin: "0 0 12px" }}>Researched benefits</h3>
                {p.benefits.map((b, i) => (
                  <div key={i} style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 13, fontWeight: 500, color: C.text1 }}>{b.label}</span>
                      <span style={{ fontSize: 11, color: C.text3 }}>{b.strength}%</span>
                    </div>
                    <div style={{ height: 4, borderRadius: 100, background: C.bg3, overflow: "hidden", marginBottom: 3 }}>
                      <div style={{ width: `${b.strength}%`, height: "100%", borderRadius: 100, background: b.strength > 75 ? C.primary : b.strength > 50 ? C.teal : C.warm }} />
                    </div>
                    <div style={{ fontSize: 12, color: C.text3, lineHeight: 1.45 }}>{b.desc}</div>
                  </div>
                ))}
              </div>)}
              {p.stacking && (<div>
                <h3 style={{ fontSize: 14, fontWeight: 500, color: C.text1, margin: "0 0 10px" }}>Common stacking combinations</h3>
                {p.stacking.map((s, i) => (
                  <div key={i} style={{ padding: 12, borderRadius: 8, border: `1px solid ${C.border}`, marginBottom: 8, display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <Tag label={s.peptide} color={C.secondary} bg={C.secondaryLight} />
                    <span style={{ fontSize: 12.5, color: C.text2, lineHeight: 1.5 }}>{s.reason}</span>
                  </div>
                ))}
              </div>)}
            </div>
          )}

          {tab === "studies" && p.studies && (
            <div>
              <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
                <MS value={p.studyCount} label="Total" /><MS value={p.humanStudies} label="Human" color={C.success} /><MS value={p.animalStudies || "—"} label="Animal" color={C.warm} /><MS value={p.inVitro || "—"} label="In vitro" color={C.secondary} />
              </div>
              {p.studies.map((s, i) => (
                <div key={i} style={{ padding: "14px 0", borderBottom: i < p.studies.length - 1 ? `1px solid ${C.borderSub}` : "none" }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: C.text1, marginBottom: 6, lineHeight: 1.4 }}>{s.title}</div>
                  <div style={{ display: "flex", gap: 7, alignItems: "center", marginBottom: 7, flexWrap: "wrap" }}>
                    <Tag label={s.type} color={s.typeColor} bg={`${s.typeColor}15`} />
                    <span style={{ fontSize: 11.5, color: C.text3 }}>{s.year}</span>
                    {s.sampleSize && <span style={{ fontSize: 11.5, color: C.text3 }}>n = {s.sampleSize}</span>}
                    <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11.5, color: C.text2 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: confDot(s.confidence), display: "inline-block" }} />{s.confidence}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: C.text2, margin: 0, lineHeight: 1.55 }}>{s.finding}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "dosage" && p.dosage && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
                {[{ l: "Standard dose", v: p.dosage.standard, c: C.primary, cl: C.primaryLight }, { l: "Frequency", v: p.dosage.frequency, c: C.secondary, cl: C.secondaryLight }, { l: "Cycle", v: p.dosage.cycle, c: C.warm, cl: C.warmLight }].map((d, i) => (
                  <div key={i} style={{ padding: 16, borderRadius: 8, background: d.cl, border: `1px solid ${d.c}15` }}>
                    <div style={{ fontSize: 10.5, color: d.c, textTransform: "uppercase", letterSpacing: 0.4, fontWeight: 500, marginBottom: 4 }}>{d.l}</div>
                    <div style={{ fontSize: 16, fontWeight: 500, color: C.text1 }}>{d.v}</div>
                  </div>
                ))}
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 500, color: C.text1, margin: "0 0 10px" }}>Administration routes</h3>
              {p.dosage.routes.map((r, i) => (
                <div key={i} style={{ padding: 14, borderRadius: 8, border: `1px solid ${C.border}`, marginBottom: 8 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 500, color: C.text1, marginBottom: 2 }}>{r.route}</div>
                  <div style={{ fontSize: 12.5, color: C.text2 }}>{r.note}</div>
                </div>
              ))}
              <div style={{ padding: 14, borderRadius: 8, background: C.cautionLight, border: `1px solid ${C.warm}25`, marginTop: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: C.warm, marginBottom: 3 }}>Important</div>
                <div style={{ fontSize: 12.5, color: C.text2, lineHeight: 1.55 }}>Dosage information is based on available research. Always consult a qualified healthcare professional before starting any peptide protocol.</div>
              </div>
            </div>
          )}

          {tab === "safety" && (
            <div>
              {p.sideEffects && (<div style={{ marginBottom: 18 }}>
                <h3 style={{ fontSize: 14, fontWeight: 500, color: C.text1, margin: "0 0 10px" }}>Reported side effects</h3>
                <div style={{ borderRadius: 8, border: `1px solid ${C.border}`, overflow: "hidden" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto" }}>
                    {["Side effect", "Frequency", "Severity"].map(h => (
                      <div key={h} style={{ padding: "7px 14px", fontSize: 10.5, fontWeight: 500, color: C.text3, textTransform: "uppercase", letterSpacing: 0.4, background: C.bg2, borderBottom: `1px solid ${C.border}` }}>{h}</div>
                    ))}
                    {p.sideEffects.map((s, i) => (
                      [
                        <div key={`l${i}`} style={{ padding: "9px 14px", fontSize: 13, color: C.text1, borderBottom: i < p.sideEffects.length - 1 ? `1px solid ${C.borderSub}` : "none" }}>{s.label}</div>,
                        <div key={`f${i}`} style={{ padding: "9px 14px", fontSize: 12.5, color: C.text2, borderBottom: i < p.sideEffects.length - 1 ? `1px solid ${C.borderSub}` : "none" }}>{s.frequency}</div>,
                        <div key={`s${i}`} style={{ padding: "9px 14px", borderBottom: i < p.sideEffects.length - 1 ? `1px solid ${C.borderSub}` : "none" }}><Tag label={s.severity} color={s.severity === "low" ? C.success : C.warm} bg={s.severity === "low" ? C.successLight : C.cautionLight} /></div>
                      ]
                    ))}
                  </div>
                </div>
              </div>)}
              <div style={{ padding: 14, borderRadius: 8, background: C.dangerLight, border: `1px solid ${C.danger}20` }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: C.danger, marginBottom: 3 }}>Disclaimer</div>
                <div style={{ fontSize: 12.5, color: C.text2, lineHeight: 1.55 }}>For research purposes only. Not medical advice. Consult a qualified professional.</div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div style={{ width: 290, flexShrink: 0 }}>
          <div style={{ padding: 18, borderRadius: 10, background: C.primaryLight, border: `1px solid ${C.primary}18`, position: "sticky", top: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 500, color: C.primary, margin: "0 0 10px" }}>What you need to know</h3>
            <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 7 }}>
              {(p.quickSummary || [`${p.name} has ${p.confidence} evidence from ${p.studyCount} studies`]).map((s, i) => (
                <li key={i} style={{ fontSize: 12.5, color: C.text2, lineHeight: 1.5 }}>{s}</li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <MS value={p.studyCount} label="Studies" /><MS value={p.humanStudies} label="Human" color={C.success} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 12 }}>
              <button onClick={() => onNav("mechanism", { peptide: p, goal: g })} style={{ width: "100%", padding: "9px 0", borderRadius: 7, border: "none", background: C.primary, color: "#fff", fontSize: 12.5, fontWeight: 500, cursor: "pointer" }}>View mechanism</button>
              <button onClick={() => onNav("report", { peptide: p, goal: g })} style={{ width: "100%", padding: "9px 0", borderRadius: 7, border: `1px solid ${C.border}`, background: C.bg1, color: C.text1, fontSize: 12.5, fontWeight: 500, cursor: "pointer" }}>Export summary</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ===== MECHANISM VIEW =====
function Mechanism({ onNav, peptide, goal }) {
  const p = peptide || peptides[0]; const g = goal || goals[0];
  const mech = p.mechanism || peptides[0].mechanism;
  const sys = p.mechanismSystems || peptides[0].mechanismSystems;
  const sc = s => s === "primary" ? C.primary : s === "strong" ? C.teal : C.warm;
  const sb = s => s === "primary" ? C.primaryLight : s === "strong" ? C.tealLight : C.warmLight;

  return (
    <>
      <BC items={[{ label: "Dashboard", onClick: () => onNav("dashboard") }, { label: "Explore", onClick: () => onNav("goals") }, { label: g.label, onClick: () => onNav("results", { goal: g }) }, { label: p.name, onClick: () => onNav("study", { peptide: p, goal: g }) }, { label: "Mechanism" }]} />
      <div style={{ marginBottom: 22 }}>
        <h1 style={{ fontSize: 24, fontWeight: 500, color: C.text1, margin: 0 }}>How {p.name} works</h1>
        <p style={{ fontSize: 14, color: C.text2, margin: "4px 0 0" }}>A simplified view of how this peptide affects your body</p>
      </div>

      {/* Vertical Timeline */}
      <div style={{ position: "relative", marginBottom: 26, paddingLeft: 40 }}>
        <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 1.5, background: C.border, borderRadius: 10 }} />
        {mech.map((step, i) => (
          <div key={i} style={{ position: "relative", marginBottom: i < mech.length - 1 ? 16 : 0, display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ position: "absolute", left: -31, width: 26, height: 26, borderRadius: "50%", background: step.colorLight, border: `2px solid ${step.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: step.color, fontWeight: 600, zIndex: 1 }}>{i + 1}</div>
            <div style={{ flex: 1, padding: 14, borderRadius: 10, border: `1px solid ${C.border}`, transition: "border-color .15s" }}
              onMouseOver={e => e.currentTarget.style.borderColor = step.color}
              onMouseOut={e => e.currentTarget.style.borderColor = C.border}>
              <span style={{ fontSize: 10.5, fontWeight: 500, color: step.color, textTransform: "uppercase", letterSpacing: 0.5 }}>{step.stage}</span>
              <div style={{ fontSize: 14.5, fontWeight: 500, color: C.text1, marginTop: 3, marginBottom: 3 }}>{step.title}</div>
              <div style={{ fontSize: 13, color: C.text2, lineHeight: 1.55 }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Body Systems */}
      <div style={{ marginBottom: 22 }}>
        <h2 style={{ fontSize: 16, fontWeight: 500, color: C.text1, margin: "0 0 12px" }}>Body systems affected</h2>
        {sys.map((s, i) => (
          <div key={i} style={{ padding: 12, borderRadius: 8, border: `1px solid ${C.border}`, marginBottom: 8, display: "flex", gap: 10, alignItems: "flex-start" }}>
            <Tag label={s.status} color={sc(s.status)} bg={sb(s.status)} />
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 500, color: C.text1, marginBottom: 1 }}>{s.system}</div>
              <div style={{ fontSize: 12.5, color: C.text2, lineHeight: 1.5 }}>{s.effect}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Plain language */}
      <div style={{ padding: 20, borderRadius: 10, background: C.primaryLight, border: `1px solid ${C.primary}18`, marginBottom: 20 }}>
        <h3 style={{ fontSize: 15, fontWeight: 500, color: C.primary, margin: "0 0 8px" }}>What does this mean for you?</h3>
        <p style={{ fontSize: 13.5, color: C.text2, lineHeight: 1.65, margin: 0 }}>
          {p.name} helps your body repair damaged tissue, particularly in the gut. It promotes new blood vessel growth in injured areas (angiogenesis) and reduces inflammatory signals like TNF-α and IL-6. A healthier gut lining improves nutrient absorption, reduces systemic inflammation, and positively influences sleep through the gut-brain axis. Effects are typically noticeable within 2–4 weeks.
        </p>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => onNav("study", { peptide: p, goal: g })} style={{ padding: "9px 18px", borderRadius: 7, border: `1px solid ${C.border}`, background: C.bg1, color: C.text1, fontSize: 12.5, fontWeight: 500, cursor: "pointer" }}>← Back to {p.name}</button>
        <button onClick={() => onNav("report", { peptide: p, goal: g })} style={{ padding: "9px 18px", borderRadius: 7, border: "none", background: C.primary, color: "#fff", fontSize: 12.5, fontWeight: 500, cursor: "pointer" }}>Generate report</button>
      </div>
    </>
  );
}

// ===== REPORT =====
function Report({ onNav, peptide, goal }) {
  const p = peptide || peptides[0]; const g = goal || goals[0];
  const [inc, setInc] = useState({ mech: true, studies: true, safety: true, dosage: true });
  const mech = p.mechanism || peptides[0].mechanism;
  return (
    <>
      <BC items={[{ label: "Dashboard", onClick: () => onNav("dashboard") }, { label: p.name, onClick: () => onNav("study", { peptide: p, goal: g }) }, { label: "Export report" }]} />
      <div style={{ display: "flex", gap: 22 }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 24, fontWeight: 500, color: C.text1, margin: "0 0 18px" }}>Export report</h1>
          <div style={{ background: C.bg2, padding: 26, borderRadius: 12, border: `1px solid ${C.border}` }}>
            <div style={{ background: C.bg1, borderRadius: 10, border: `1px solid ${C.border}`, padding: 26, maxWidth: 580, margin: "0 auto" }}>
              <div style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 14, marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                  <div style={{ width: 20, height: 20, borderRadius: 5, background: C.primary, color: "#fff", fontSize: 10, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>P</div>
                  <span style={{ fontSize: 11, color: C.text3 }}>PeptideAI Research Report</span>
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 500, color: C.text1, margin: "0 0 2px" }}>Peptide Research Summary</h2>
                <div style={{ fontSize: 12, color: C.text3 }}>Goal: {g.label} · April 20, 2026</div>
              </div>
              <div style={{ marginBottom: 14 }}>
                <h3 style={{ fontSize: 14, fontWeight: 500, color: C.text1, margin: "0 0 5px" }}>{p.name} — {p.fullName}</h3>
                <p style={{ fontSize: 12.5, color: C.text2, lineHeight: 1.55, margin: "0 0 8px" }}>{p.summary}</p>
                <div style={{ display: "flex", gap: 14, fontSize: 12, color: C.text2 }}>
                  <span><strong style={{ color: C.text1 }}>{p.studyCount}</strong> studies</span>
                  <span><strong style={{ color: C.text1 }}>{p.humanStudies}</strong> human</span>
                  <span>Score: <strong style={{ color: C.primary }}>{p.evidenceScore}/100</strong></span>
                </div>
              </div>
              {inc.mech && (<div style={{ marginBottom: 14, padding: 12, borderRadius: 7, background: C.bg2 }}>
                <h4 style={{ fontSize: 12.5, fontWeight: 500, color: C.text1, margin: "0 0 6px" }}>Mechanism</h4>
                {mech.map((s, i) => (
                  <div key={i} style={{ fontSize: 11.5, color: C.text2, marginBottom: 3 }}><span style={{ fontWeight: 500, color: s.color }}>{i + 1}.</span> <strong style={{ color: C.text1 }}>{s.title}</strong> — {s.desc.split(".")[0]}.</div>
                ))}
              </div>)}
              {inc.dosage && p.dosage && (<div style={{ marginBottom: 14, fontSize: 12.5, color: C.text2, lineHeight: 1.5 }}>
                <h4 style={{ fontSize: 12.5, fontWeight: 500, color: C.text1, margin: "0 0 4px" }}>Dosage</h4>
                Standard: {p.dosage.standard}, {p.dosage.frequency}, Cycle: {p.dosage.cycle}
              </div>)}
              {inc.studies && p.studies && (<div style={{ marginBottom: 14 }}>
                <h4 style={{ fontSize: 12.5, fontWeight: 500, color: C.text1, margin: "0 0 5px" }}>Key studies</h4>
                {p.studies.slice(0, 3).map((s, i) => (
                  <div key={i} style={{ fontSize: 11.5, color: C.text2, marginBottom: 5, lineHeight: 1.45 }}><strong style={{ color: C.text1 }}>{s.title}</strong> ({s.year}, {s.type}){s.sampleSize ? ` n=${s.sampleSize}` : ""}</div>
                ))}
              </div>)}
              {inc.safety && (<div style={{ padding: 10, borderRadius: 6, background: C.cautionLight, border: `1px solid ${C.warm}20`, fontSize: 11.5, color: C.text2 }}><strong style={{ color: C.warm }}>Disclaimer:</strong> For research purposes only. Not medical advice.</div>)}
            </div>
          </div>
        </div>
        <div style={{ width: 250, flexShrink: 0 }}>
          <div style={{ padding: 18, borderRadius: 10, border: `1px solid ${C.border}`, position: "sticky", top: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 500, color: C.text1, margin: "0 0 12px" }}>Report options</h3>
            {[{ k: "mech", l: "Mechanism" }, { k: "dosage", l: "Dosage protocol" }, { k: "studies", l: "Key studies" }, { k: "safety", l: "Disclaimer" }].map(o => (
              <label key={o.k} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5, color: C.text2, cursor: "pointer", marginBottom: 9 }}>
                <input type="checkbox" checked={inc[o.k]} onChange={e => setInc({ ...inc, [o.k]: e.target.checked })} style={{ width: 15, height: 15, accentColor: C.primary }} />{o.l}
              </label>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 14 }}>
              <button style={{ width: "100%", padding: "9px 0", borderRadius: 7, border: "none", background: C.primary, color: "#fff", fontSize: 12.5, fontWeight: 500, cursor: "pointer" }}>Download PDF</button>
              <button style={{ width: "100%", padding: "9px 0", borderRadius: 7, border: `1px solid ${C.border}`, background: C.bg1, color: C.text1, fontSize: 12.5, fontWeight: 500, cursor: "pointer" }}>Copy link</button>
              <button style={{ width: "100%", padding: "9px 0", borderRadius: 7, border: `1px solid ${C.border}`, background: C.bg1, color: C.text1, fontSize: 12.5, fontWeight: 500, cursor: "pointer" }}>Print</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ===== FIGMA BOARD NOTES =====
function FigmaBoard() {
  const sections = [
    {
      title: "The feature", color: C.primary,
      text: `Peptide Explorer is a guided research flow within a healthcare research web application. It allows any user — from a wellness-curious individual to a clinician — to research peptides by selecting a health goal (sleep, cognition, gut health), browse matched peptides ranked by evidence strength, read study details and dosage protocols in plain language, understand mechanisms through a visual pathway, and export a shareable summary.\n\nThe flow covers 6 connected screens: Dashboard → Goal Selection → Peptide Results → Study Deep-Dive → Mechanism View → Report Export. Each screen is part of one continuous task: go from "I have a health question" to "I have an answer I understand and can share."`
    },
    {
      title: "The problem it solves", color: C.coral,
      text: `Peptide research data is scattered across dense scientific databases designed for specialists. A patient, biohacker, or non-specialist clinician has no accessible way to:\n\n• Discover which peptides are relevant to their specific health goal\n• Understand how strong the evidence is without reading full papers\n• Grasp how a peptide actually works in the body\n• Compare administration routes and dosage protocols\n• Get a shareable summary they can bring to their doctor\n\nExisting tools provide good individual peptide profiles but lack goal-first navigation. Users think "I want better sleep" — not "I want BPC-157." This feature bridges that gap with goal-driven, evidence-ranked, plain-language research.`
    },
    {
      title: "Design decisions", color: C.secondary,
      text: `1. Goal-first navigation — users think in health outcomes, not molecule names. The flow starts with "what do you want to achieve?" and maps backward to relevant peptides.\n\n2. Evidence bars replace raw study counts — a visual meter gives instant understanding of research strength. A layperson reads the fill level; a researcher reads the number.\n\n3. "What you need to know" sidebar — on the densest screen, a persistent summary panel gives the takeaway in 10 seconds.\n\n4. Vertical timeline for mechanism — numbered pathway steps explain how a peptide works without requiring scientific background.\n\n5. Body systems mapping — shows which body systems are affected and how strongly, making scope of impact immediately clear.\n\n6. No shadows, no thick borders — hierarchy through spacing, typography weight, and subtle color tinting. Calm and trustworthy for healthcare context.\n\n7. Dosage and safety as first-class tabs — protocol information is one click away, not buried. Inspired by peptideinjections.ai's accessible approach.\n\n8. AI search on dashboard — natural-language queries matching how people actually research health topics.\n\n9. Stacking combinations — shows complementary peptides for users exploring protocols, a pattern common in the peptide research community.\n\n10. Consistent card hover pattern — green border + light tint replaces shadow-based elevation, maintaining the clean visual language throughout.`
    },
  ];
  return (
    <div style={{ maxWidth: 700 }}>
      <div style={{ marginBottom: 26 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: C.purple, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 5 }}>Figma board — copy these notes</div>
        <h1 style={{ fontSize: 24, fontWeight: 500, color: C.text1, margin: 0 }}>Peptide Explorer — design explanation</h1>
        <p style={{ fontSize: 14, color: C.text2, margin: "4px 0 0" }}>Place alongside your screens on the Figma board</p>
      </div>
      {sections.map((s, i) => (
        <div key={i} style={{ marginBottom: 18, padding: 22, borderRadius: 10, border: `1px solid ${C.border}`, borderLeft: `3px solid ${s.color}` }}>
          <h2 style={{ fontSize: 16, fontWeight: 500, color: s.color, margin: "0 0 10px" }}>{s.title}</h2>
          <div style={{ fontSize: 13.5, color: C.text2, lineHeight: 1.7, whiteSpace: "pre-line" }}>{s.text}</div>
        </div>
      ))}
      <div style={{ padding: 14, borderRadius: 8, background: C.bg2, border: `1px solid ${C.border}` }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: C.text1, marginBottom: 3 }}>Flow summary</div>
        <div style={{ fontSize: 12.5, color: C.text2, lineHeight: 1.5 }}>Dashboard (AI search, trending peptides) → Goal Selection (health-goal cards) → Peptide Results (ranked by evidence) → Study Deep-Dive (overview, studies, dosage, safety + sidebar) → Mechanism View (pathway timeline, body systems, plain-language explainer) → Report Export (customizable PDF summary)</div>
      </div>
    </div>
  );
}

// ===== MAIN =====
export default function App() {
  const [screen, setScreen] = useState("dashboard");
  const [goal, setGoal] = useState(null);
  const [peptide, setPeptide] = useState(null);

  const nav = (target, data) => {
    if (data?.goal) setGoal(data.goal);
    if (data?.peptide) setPeptide(data.peptide);
    setScreen(target);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'DM Sans', -apple-system, sans-serif", WebkitFontSmoothing: "antialiased", background: C.bg1 }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
      <Sidebar screen={screen} onNav={nav} />
      <main style={{ flex: 1, padding: "24px 32px", minWidth: 0, maxWidth: 920 }}>
        {screen === "dashboard" && <Dashboard onNav={nav} />}
        {screen === "goals" && <Goals onNav={nav} />}
        {screen === "results" && <Results onNav={nav} goal={goal} />}
        {screen === "study" && <Study onNav={nav} peptide={peptide} goal={goal} />}
        {screen === "mechanism" && <Mechanism onNav={nav} peptide={peptide} goal={goal} />}
        {screen === "report" && <Report onNav={nav} peptide={peptide} goal={goal} />}
        {screen === "figma" && <FigmaBoard />}
      </main>
    </div>
  );
}
