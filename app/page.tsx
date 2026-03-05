export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <header
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          background: "rgba(27,30,50,0.85)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "32px", fontWeight: "bold", letterSpacing: "1px" }}>
            LOVCI LOVOSICE
          </div>

          <div style={{ display: "flex", gap: "10px", fontSize: "16px", opacity: 0.7 }}>
            ○ ○ ○ ○ ○
          </div>
        </div>

        {/* MENU (centrované) */}
        <nav
          style={{
            marginTop: "18px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", gap: "32px", fontSize: "14px", letterSpacing: "1px" }}>
            <span>TÝMY</span>
            <span>KLUB</span>
            <span>ZPRÁVY</span>
            <span>VSTUPENKY</span>
            <span>ARCHIV</span>
            <span>TURNAJE</span>
            <span>PARTNEŘI</span>
            <span>PROJEKTY</span>
          </div>
        </nav>
      </header>

      <section
        style={{
          height: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "60px",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        VELKÉ VIDEO
      </section>
    </main>
  );
}
