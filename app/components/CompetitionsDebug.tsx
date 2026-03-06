"use client";

import { useEffect, useState } from "react";

export default function CompetitionsDebug() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("/api/competitions")
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || "Nepodařilo se načíst soutěže.");
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <pre
        style={{
          color: "#ffb3b3",
          fontSize: 12,
          overflowX: "auto",
          background: "rgba(0,0,0,0.6)",
          padding: 20,
          borderRadius: 12,
        }}
      >
        {error}
      </pre>
    );
  }

  if (!data) {
    return (
      <div
        style={{
          color: "white",
          fontSize: 14,
          background: "rgba(0,0,0,0.6)",
          padding: 20,
          borderRadius: 12,
        }}
      >
        Načítám soutěže...
      </div>
    );
  }

  return (
    <pre
      style={{
        color: "white",
        fontSize: 12,
        overflowX: "auto",
        background: "rgba(0,0,0,0.6)",
        padding: 20,
        borderRadius: 12,
      }}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}