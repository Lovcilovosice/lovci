import { getCompetitions } from "@/lib/handball";

export default async function CompetitionsDebug() {
  const competitions = await getCompetitions();

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
      {JSON.stringify(competitions, null, 2)}
    </pre>
  );
}