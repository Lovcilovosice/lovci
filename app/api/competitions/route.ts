import { getCompetitions } from "@/lib/handball";

export async function GET() {
  try {
    const competitions = await getCompetitions();
    return Response.json(competitions);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Neznámá chyba";
    return new Response(message, { status: 500 });
  }
}