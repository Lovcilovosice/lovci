"use client";

import type { CSSProperties, ReactNode } from "react";

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

const lovciTvVideos = [
  {
    title: "PO LOVU | Lovci: Talent",
    url: "https://youtu.be/5iY4F2o8cvo?si=v3Lnnelfy7SCqBwf",
  },
  {
    title: "Sem vložíte další video",
    url: "https://youtu.be/5iY4F2o8cvo",
  },
  {
    title: "Sem vložíte další video",
    url: "https://youtu.be/5iY4F2o8cvo",
  },
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
        objectFit: "contain",
      }}
    />
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{
        width: 34,
        height: 34,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "999px",
        border: "1px solid rgba(186,210,237,0.35)",
        background: "rgba(255,255,255,0.04)",
        color: "white",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: 16,
      }}
    >
      {children}
    </a>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2
      className="clubFont"
      style={{
        fontSize: 28,
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginTop: 0,
        marginBottom: 18,
      }}
    >
      {title}
    </h2>
  );
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const videoId = parsed.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    return "";
  } catch {
    return "";
  }
}

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 520,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(8,10,18,0.45) 0%, rgba(8,10,18,0.62) 45%, rgba(8,10,18,0.88) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.14)",
          fontSize: "clamp(38px, 7vw, 88px)",
          fontWeight: 900,
          letterSpacing: 3,
          textTransform: "uppercase",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        Velké video
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1180,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: 700 }}>
          <div
            style={{
              display: "inline-block",
              marginBottom: 14,
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(186,210,237,0.12)",
              border: "1px solid rgba(186,210,237,0.28)",
              color: "#bad2ed",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Extraliga mužů
          </div>

          <h1
            className="clubFont"
            style={{
              margin: 0,
              fontSize: "clamp(34px, 6vw, 68px)",
              lineHeight: 1.02,
              fontWeight: 900,
              textTransform: "uppercase",
              textShadow: "0 6px 24px rgba(0,0,0,0.35)",
            }}
          >
            Lovci Lovosice
          </h1>

          <p
            style={{
              marginTop: 18,
              marginBottom: 0,
              maxWidth: 620,
              color: "rgba(255,255,255,0.86)",
              fontSize: 18,
              lineHeight: 1.6,
            }}
          >
            Oficiální web extraligového házenkářského klubu. Zápasy, výsledky,
            články, tabulky, statistiky a klubové novinky na jednom místě.
          </p>
        </div>

        <div
          style={{
            minWidth: 280,
            maxWidth: 360,
            width: "100%",
            padding: 22,
            borderRadius: 22,
            background: "rgba(13,17,31,0.72)",
            border: "1px solid rgba(186,210,237,0.22)",
            boxShadow: "0 18px 45px rgba(0,0,0,0.28)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#bad2ed",
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            Další zápas
          </div>

          <div
            className="clubFont"
            style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}
          >
            Lovci vs. Karviná
          </div>

          <div
            style={{
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
              marginBottom: 18,
            }}
          >
            Sobota 14. 3. 2026 • 18:00
            <br />
            Sportovní hala Lovosice
          </div>

          <a
            href="/vstupenky"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 18px",
              borderRadius: 12,
              background: "#bad2ed",
              color: "#1b1e32",
              textDecoration: "none",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Koupit vstupenky
          </a>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const articles = [
    {
      title: "Zlepšený druhý poločas přinesl Lovcům další vítězství",
      category: "A-tým",
      date: "7. 2. 2026",
    },
    {
      title: "Dorostenci pokračují v jarní části soutěže",
      category: "Mládež",
      date: "4. 2. 2026",
    },
    {
      title: "Rozhovor s trenérem před šlágrem kola",
      category: "Klub",
      date: "2. 2. 2026",
    },
  ];

  return (
    <section
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "10px 20px 30px",
      }}
    >
      <SectionTitle title="Aktuálně" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(280px, 1fr)",
          gap: 20,
        }}
      >
        <article
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(186,210,237,0.18)",
            background: "rgba(10,14,28,0.74)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.16)",
            minHeight: 340,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: 210,
              background:
                "linear-gradient(135deg, rgba(90,140,230,0.7), rgba(20,28,70,0.85))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(0,220,255,0.75)",
              fontSize: 34,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Fotka z článku
          </div>

          <div
            style={{
              padding: 22,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#bad2ed",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 10,
                }}
              >
                {articles[0].category}
              </div>

              <h3
                className="clubFont"
                style={{
                  margin: 0,
                  fontSize: 34,
                  lineHeight: 1.15,
                }}
              >
                {articles[0].title}
              </h3>
            </div>

            <div
              style={{
                marginTop: 18,
                textAlign: "right",
                color: "rgba(255,255,255,0.85)",
                fontWeight: 700,
              }}
            >
              {articles[0].date}
            </div>
          </div>
        </article>

        <div style={{ display: "grid", gap: 14 }}>
          {articles.slice(1).map((article) => (
            <article
              key={article.title}
              style={{
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(186,210,237,0.18)",
                background: "rgba(10,14,28,0.74)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.16)",
                minHeight: 162,
              }}
            >
              <div
                style={{
                  height: 92,
                  background:
                    "linear-gradient(135deg, rgba(90,140,230,0.7), rgba(20,28,70,0.85))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(0,220,255,0.75)",
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Fotka z článku
              </div>

              <div style={{ padding: 14 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#bad2ed",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 6,
                  }}
                >
                  {article.category}
                </div>

                <h3
                  className="clubFont"
                  style={{
                    margin: 0,
                    fontSize: 18,
                    lineHeight: 1.2,
                  }}
                >
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MatchBar() {
  return (
    <section
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "0 20px 34px",
      }}
    >
      <div
        style={{
          border: "3px solid rgba(220,235,255,0.85)",
          background: "rgba(18,24,52,0.88)",
          padding: "18px 26px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: 24,
          alignItems: "center",
        }}
      >
        <div
          className="clubFont"
          style={{
            fontSize: 28,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          HK FCC Město Lovosice
        </div>

        <div
          className="clubFont"
          style={{
            fontSize: 34,
            textAlign: "center",
            lineHeight: 1.1,
            color: "#dce7ff",
          }}
        >
          25. března
          <br />
          18:00
        </div>

        <div
          className="clubFont"
          style={{
            fontSize: 28,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Talent tým
          <br />
          Plzeňského kraje
        </div>
      </div>
    </section>
  );
}

function StandingsTable() {
  const rows = [
    {
      position: 1,
      team: "HCB Karviná",
      played: 21,
      wins: 19,
      draws: 0,
      losses: 2,
      score: "702:543",
      points: 38,
    },
    {
      position: 2,
      team: "Talent tým Plzeňského kraje",
      played: 20,
      wins: 16,
      draws: 1,
      losses: 3,
      score: "655:530",
      points: 33,
    },
    {
      position: 3,
      team: "HC Dukla Praha",
      played: 21,
      wins: 15,
      draws: 1,
      losses: 5,
      score: "650:590",
      points: 31,
    },
    {
      position: 4,
      team: "HK FCC Město Lovosice",
      played: 20,
      wins: 14,
      draws: 1,
      losses: 5,
      score: "620:570",
      points: 29,
    },
    {
      position: 5,
      team: "HC ROBE Zubří",
      played: 20,
      wins: 12,
      draws: 2,
      losses: 6,
      score: "601:588",
      points: 26,
    },
    {
      position: 6,
      team: "SKKP Handball Brno",
      played: 20,
      wins: 10,
      draws: 1,
      losses: 9,
      score: "590:600",
      points: 21,
    },
    {
      position: 7,
      team: "Frýdek-Místek",
      played: 20,
      wins: 8,
      draws: 2,
      losses: 10,
      score: "580:610",
      points: 18,
    },
    {
      position: 8,
      team: "Nové Veselí",
      played: 20,
      wins: 7,
      draws: 1,
      losses: 12,
      score: "560:615",
      points: 15,
    },
    {
      position: 9,
      team: "Maloměřice",
      played: 20,
      wins: 6,
      draws: 1,
      losses: 13,
      score: "540:620",
      points: 13,
    },
    {
      position: 10,
      team: "Jičín",
      played: 20,
      wins: 5,
      draws: 2,
      losses: 13,
      score: "535:625",
      points: 12,
    },
    {
      position: 11,
      team: "Brno",
      played: 20,
      wins: 4,
      draws: 1,
      losses: 15,
      score: "520:640",
      points: 9,
    },
    {
      position: 12,
      team: "Strakonice",
      played: 20,
      wins: 3,
      draws: 0,
      losses: 17,
      score: "500:660",
      points: 6,
    },
  ];

  return (
    <section
      style={{
        background: "rgba(10,14,28,0.78)",
        border: "1px solid rgba(186,210,237,0.22)",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
      }}
    >
      <div style={{ padding: "22px 22px 10px" }}>
        <SectionTitle title="Chance extraliga" />
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            minWidth: 700,
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
              const isLovci = row.team.includes("Lovosice");

              return (
                <tr
                  key={row.team}
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    background: isLovci
                      ? "rgba(186,210,237,0.12)"
                      : "transparent",
                  }}
                >
                  <td style={tdStyle}>{row.position}</td>
                  <td
                    style={{
                      ...tdStyle,
                      textAlign: "left",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.team}
                  </td>
                  <td style={tdStyle}>{row.played}</td>
                  <td style={tdStyle}>{row.wins}</td>
                  <td style={tdStyle}>{row.draws}</td>
                  <td style={tdStyle}>{row.losses}</td>
                  <td style={tdStyle}>{row.score}</td>
                  <td style={{ ...tdStyle, fontWeight: 800 }}>
                    {row.points}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StatsBlock() {
  const players = [
    {
      name: "KUPA",
      matches: 20,
      goals: 100,
      image: "/images/hrac-kupa.png",
    },
    {
      name: "CHOTĚBORSKÝ",
      matches: 20,
      goals: 100,
      image: "/images/hrac-choteborsky.png",
    },
    {
      name: "HORÁK",
      matches: 20,
      goals: 100,
      image: "/images/hrac-horak.png",
    },
  ];

  return (
    <section
      style={{
        background: "rgba(10,14,28,0.78)",
        border: "1px solid rgba(186,210,237,0.22)",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
        padding: 22,
        height: "100%",
      }}
    >
      <SectionTitle title="Statistiky" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 18,
        }}
      >
        {players.map((player) => (
          <div
            key={player.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: 16,
              borderRadius: 16,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <img
              src={player.image}
              alt={player.name}
              style={{
                width: 84,
                height: 84,
                objectFit: "cover",
                borderRadius: 12,
                background: "rgba(186,210,237,0.12)",
                flexShrink: 0,
              }}
            />

            <div style={{ flex: 1 }}>
              <div
                className="clubFont"
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  lineHeight: 1.1,
                  marginBottom: 10,
                }}
              >
                {player.name}
              </div>

              <div
                style={{
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.6,
                  fontSize: 15,
                }}
              >
                {player.matches} zápasů
                <br />
                {player.goals} gólů
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StandingsAndStats() {
  return (
    <section
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "20px 20px 70px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}
      >
        <StandingsTable />
        <StatsBlock />
      </div>
    </section>
  );
}

function LovciTVSection() {
  const mainVideo = lovciTvVideos[0];
  const embedUrl = getYouTubeEmbedUrl(mainVideo.url);

  return (
    <section
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "0 20px 70px",
      }}
    >
      <SectionTitle title="Lovci TV" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(280px, 1fr)",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            background: "rgba(10,14,28,0.78)",
            border: "1px solid rgba(186,210,237,0.22)",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              background: "#000",
            }}
          >
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={mainVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 700,
                }}
              >
                Neplatný odkaz na video
              </div>
            )}
          </div>

          <div style={{ padding: 20 }}>
            <h3
              className="clubFont"
              style={{
                margin: 0,
                fontSize: 24,
                lineHeight: 1.2,
              }}
            >
              {mainVideo.title}
            </h3>
          </div>
        </div>

        <div
          style={{
            background: "rgba(10,14,28,0.78)",
            border: "1px solid rgba(186,210,237,0.22)",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
            padding: 20,
          }}
        >
          <div
            className="clubFont"
            style={{
              fontSize: 18,
              marginBottom: 16,
            }}
          >
            Další videa
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {lovciTvVideos.map((video, index) => (
              <a
                key={`${video.title}-${index}`}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  padding: 14,
                  borderRadius: 14,
                  textDecoration: "none",
                  color: "white",
                  background:
                    index === 0
                      ? "rgba(186,210,237,0.12)"
                      : "rgba(255,255,255,0.04)",
                  border:
                    index === 0
                      ? "1px solid rgba(186,210,237,0.28)"
                      : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#bad2ed",
                    fontWeight: 800,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  Video {index + 1}
                </div>

                <div
                  className="clubFont"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.2,
                  }}
                >
                  {video.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const thStyle: CSSProperties = {
  padding: "14px 10px",
  textAlign: "center",
  fontWeight: 800,
  color: "#bad2ed",
};

const tdStyle: CSSProperties = {
  padding: "12px 10px",
  textAlign: "center",
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(8,10,18,0.58), rgba(8,10,18,0.78)), url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "18px 28px 14px",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          background:
            "linear-gradient(180deg, rgba(27,30,50,0.96), rgba(27,30,50,0.88))",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
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
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
                className="clubFont"
                style={{
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 900,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Lovci Lovosice
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <SocialLink href="#" label="Facebook">
                f
              </SocialLink>
              <SocialLink href="#" label="Instagram">
                ◎
              </SocialLink>
              <SocialLink href="#" label="YouTube">
                ▶
              </SocialLink>

              <a
                href="https://clen.hazenalovosice.cz/v2/sign-in"
                target="_blank"
                rel="noreferrer"
                style={{
                  marginLeft: 6,
                  padding: "10px 14px",
                  borderRadius: 12,
                  textDecoration: "none",
                  color: "#1b1e32",
                  background: "#bad2ed",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: 13,
                  letterSpacing: 0.6,
                }}
              >
                KIS
              </a>
            </div>
          </div>

          <nav
            style={{
              marginTop: 16,
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
                justifyContent: "center",
                flexWrap: "wrap",
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
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: 700,
                    padding: "8px 0",
                  }}
                >
                  <Icon src={item.icon} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <HeroSection />
      <NewsSection />
      <MatchBar />
      <StandingsAndStats />
      <LovciTVSection />
    </main>
  );
}