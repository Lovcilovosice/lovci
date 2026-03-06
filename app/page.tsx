"use client";

const navItems = [
  { key: "tymy", label: "TÝMY", icon: "/icons/tymy.svg" },
  { key: "klub", label: "KLUB", icon: "/icons/klub.svg" },
  { key: "zpravy", label: "ZPRÁVY", icon: "/icons/zpravy.svg" },
  { key: "vstupenky", label: "VSTUPENKY", icon: "/icons/vstupenky.svg" },
  { key: "archiv", label: "ARCHIV", icon: "/icons/archiv.svg" },
  { key: "turnaje", label: "TURNAJE", icon: "/icons/turnaje.svg" },
  { key: "partneri", label: "PARTNEŘI", icon: "/icons/partneri.svg" },
  { key: "projekty", label: "PROJEKTY", icon: "/icons/projekty.svg" },
];

function MenuIcon({ src }: { src: string }) {
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
        objectFit: "contain",
      }}
    />
  );
}

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 34,
        height: 34,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.95)",
        color: "#1b1e32",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      {children}
    </div>
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
          padding: "14px 28px 10px",
          borderBottom: "1px solid rgba(186,210,237,0.45)",
          background:
            "linear-gradient(180deg, rgba(27,30,50,0.94), rgba(27,30,50,0.76))",
          backdropFilter: "blur(6px)",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <img
                src="/images/logo-lovci.png"
                alt="Lovci Lovosice"
                style={{
                  width: 64,
                  height: 64,
                  objectFit: "contain",
                  display: "block",
                }}
              />

              <div
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                LOVCI LOVOSICE
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <a href="#" style={{ textDecoration: "none" }}>
                <CircleIcon>f</CircleIcon>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <CircleIcon>◎</CircleIcon>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <CircleIcon>▶</CircleIcon>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <CircleIcon>◔</CircleIcon>
              </a>

              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 0.8,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.92)",
                  marginLeft: 4,
                }}
              >
                KIS
              </div>

              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.92)",
                  textTransform: "uppercase",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 0.8,
                }}
              >
                <CircleIcon>⌕</CircleIcon>
                <span>Vyhledávání</span>
              </a>
            </div>
          </div>

          <nav
            style={{
              marginTop: 12,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 20,
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
                    color: "rgba(255,255,255,0.92)",
                    padding: "6px 8px",
                    borderRadius: 10,
                    transition: "all 120ms ease",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#bad2ed";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.92)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <MenuIcon src={item.icon} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
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