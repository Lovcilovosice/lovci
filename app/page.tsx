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
      }}
    />
  );
}

function StandingsTable() {
  const rows = [
    { position: 1, team: "HCB Karviná", played: 21, wins: 19, draws: 0, losses: 2, score: "702:543", points: 38 },
    { position: 2, team: "Talent tým Plzeňského kraje", played: 20, wins: 16, draws: 1, losses: 3, score: "655:530", points: 33 },
    { position: 3, team: "HC Dukla Praha", played: 21, wins: 15, draws: 1, losses: 5, score: "650:590", points: 31 },
    { position: 4, team: "HK FCC Město Lovosice", played: 20, wins: 14, draws: 1, losses: 5, score: "620:570", points: 29 },
    { position: 5, team: "HC ROBE Zubří", played: 20, wins: 12, draws: 2, losses: 6, score: "601:588", points: 26 },
    { position: 6, team: "SKKP Handball Brno", played: 20, wins: 10, draws: 1, losses: 9, score: "590:600", points: 21 },
    { position: 7, team: "Frýdek-Místek", played: 20, wins: 8, draws: 2, losses: 10, score: "580:610", points: 18 },
    { position: 8, team: "Nové Veselí", played: 20, wins: 7, draws: 1, losses: 12, score: "560:615", points: 15 },
  ];

  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "40px 20px 60px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          marginBottom: 18,
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 28,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 1,
            color: "white",
          }}
        >
          Tabulka extraligy
        </h2>

        <div
          style={{
            color: "#bad2ed",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: 1,
            fontWeight: 700,
          }}
        >
          Demo data
        </div>
      </div>

      <div
        style={{
          background: "rgba(10,14,28,0.78)",
          border: "1px solid rgba(186,210,237,0.22)",
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 12px 30px rgba(0,0,0,0.22)",
          backdropFilter: "blur(6px)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            color: "white",
            fontSize: 14,
          }}
        >
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.05)" }}>
              <th style={thStyle}>#</th>
              <th style={{ ...thStyle, textAlign: "left" }}>Tým</th>
              <th style={thStyle}>Z</th>
              <th style={thStyle}>V</th>
              <th style={thStyle}>R</th>
              <th style={thStyle}>P</th>
              <th style={thStyle}>Skóre</th>
              <th style={thStyle}>B</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => {
              const isLovci = row.team.toLowerCase().includes("lovosice");

              return (
                <tr
                  key={row.team}
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    background: isLovci ? "rgba(186,210,237,0.12)" : "transparent",
                  }}
                >
                  <td style={tdStyle}>{row.position}.</td>
                  <td style={{ ...tdStyle, textAlign: "left", fontWeight: 700 }}>
                    {row.team}
                  </td>
                  <td style={tdStyle}>{row.played}</td>
                  <td style={tdStyle}>{row.wins}</td>
                  <td style={tdStyle}>{row.draws}</td>
                  <td style={tdStyle}>{row.losses}</td>
                  <td style={tdStyle}>{row.score}</td>
                  <td style={{ ...tdStyle, fontWeight: 800 }}>{row.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const thStyle: React.CSSProperties = {
  padding: "14px 10px",
  textAlign: "center",
  fontWeight: 800,
  color: "#bad2ed",
};

const tdStyle: React.CSSProperties = {
  padding: "12px 10px",
  textAlign: "center",
};

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
          background:
            "linear-gradient(180deg, rgba(27,30,50,0.92), rgba(27,30,50,0.72))",
          backdropFilter: "blur(6px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <img
              src="/images/logo-lovci.png"
              alt="Lovci Lovosice"
              style={{
                width: 60,
                height: 60,
                objectFit: "contain",
              }}
            />

            <div
              style={{
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              LOVCI LOVOSICE
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, fontSize: 14, opacity: 0.8 }}>
            ○ ○ ○ ○ ○
          </div>
        </div>

        <nav
          style={{
            marginTop: 14,
            display: "flex",
            justifyContent: "center",
          }}
        >
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
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.88)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                }}
              >
                <Icon src={item.icon} />
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

      <StandingsTable />
    </main>
  );
}