"use client";
const navItems = [
  { key: "tymy", label: "TÝMY", icon: "/icons/tymy.svg" },
  { key: "klub", label: "KLUB", icon: "/icons/klub.svg" },
  { key: "zpravy", label: "ZPRÁVY", icon: "/icons/zpravy.svg" },
  { key: "vstupenky", label: "VSTUPENKY", icon: "/icons/vstupenky.svg" },
  { key: "archiv", label: "ARCHIV" },
  { key: "turnaje", label: "TURNAJE", icon: "/icons/turnaje.svg" },
  { key: "partneri", label: "PARTNEŘI", icon: "/icons/partneri.svg" },
  { key: "projekty", label: "PROJEKTY" },
];

function Icon({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      width={18}
      height={18}
      style={{
        width: 18,
        height: 18,
        display: "block",
        // žádné pozadí, žádné filtry
      }}
    />
  );
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <header
        style={{
          padding: "18px 28px",
          borderBottom: "1px solid rgba(255,255,255,0.18)",
          background: "linear-gradient(180deg, rgba(27,30,50,0.92), rgba(27,30,50,0.72))",
          backdropFilter: "blur(6px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 1 }}>
            LOVCI LOVOSICE
          </div>

          <div style={{ display: "flex", gap: 10, fontSize: 14, opacity: 0.7 }}>
            ○ ○ ○ ○ ○
          </div>
        </div>

        <nav style={{ marginTop: 14, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 13,
              letterSpacing: 1,
              textTransform: "uppercase",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`/${item.key}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.88)",
                  padding: "8px 10px",
                  borderRadius: 12,
                  transition: "all 120ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#bad2ed";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.88)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {"icon" in item && item.icon ? <Icon src={item.icon} /> : null}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        style={{
          height: 420,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 60,
          color: "rgba(255,255,255,0.22)",
          textTransform: "uppercase",
          letterSpacing: 2,
          padding: 24,
          textAlign: "center",
        }}
      >
        VELKÉ VIDEO
      </section>
    </main>
  );
}
