const navItems = [
  { key: "tymy", label: "TÝMY", icon: "/icons/tymy.png" },
  { key: "klub", label: "KLUB", icon: "/icons/klub.png" },
  { key: "zpravy", label: "ZPRÁVY", icon: "/icons/zpravy.png" },
  { key: "vstupenky", label: "VSTUPENKY", icon: "/icons/vstupenky.png" },
  { key: "archiv", label: "ARCHIV" }, // bez ikony zatím
  { key: "turnaje", label: "TURNAJE", icon: "/icons/turnaje.png" },
  { key: "partneri", label: "PARTNEŘI", icon: "/icons/partneri.png" },
  { key: "projekty", label: "PROJEKTY" }, // bez ikony zatím
];

function NavIcon({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      style={{
        width: 18,
        height: 18,
        objectFit: "contain",
        opacity: 0.95,
        // žádný invert – jinak vzniknou bílé čtverce, když PNG není průhledné
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
              gap: 28,
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
                  gap: 8,
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.88)",
                  padding: "6px 8px",
                  borderRadius: 10,
                }}
              >
                {"icon" in item && item.icon ? <NavIcon src={item.icon} /> : null}
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
        }}
      >
        VELKÉ VIDEO
      </section>
    </main>
  );
}
