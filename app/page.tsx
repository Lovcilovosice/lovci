export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#1b1e32",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >

      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <div style={{fontSize:"24px", color:"#bad2ed", fontWeight:"bold"}}>
          LOVCI LOVOSICE
        </div>

        <nav style={{display:"flex", gap:"24px", fontSize:"14px"}}>
          <span>TÝMY</span>
          <span>KLUB</span>
          <span>ZPRÁVY</span>
          <span>VSTUPENKY</span>
          <span>TURNAJE</span>
          <span>PARTNEŘI</span>
        </nav>
      </header>

      {/* HERO VIDEO */}
      <section
        style={{
          height:"420px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          fontSize:"48px",
          color:"rgba(255,255,255,0.25)"
        }}
      >
        VELKÉ VIDEO
      </section>

    </main>
  );
}
