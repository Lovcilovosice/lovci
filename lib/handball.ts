const BASE_URL = process.env.HANDBALL_API_BASE || "https://is.handball.cz";

type LoginResponse = {
  access_token: string;
};

export async function handballLogin(): Promise<string> {
  const userName = process.env.HANDBALL_API_USERNAME;
  const password = process.env.HANDBALL_API_PASSWORD;

  if (!userName || !password) {
    throw new Error("Chybí HANDBALL_API_USERNAME nebo HANDBALL_API_PASSWORD v .env.local");
  }

  const trimmedUserName = userName.trim();
  const trimmedPassword = password.trim();

  const res = await fetch(`${BASE_URL}/api/partner/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      userName: trimmedUserName,
      password: trimmedPassword,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Login do API selhal: ${res.status} ${text} | userName=${trimmedUserName}`
    );
  }

  const data = (await res.json()) as LoginResponse;

  if (!data.access_token) {
    throw new Error("API nevrátilo access_token.");
  }

  return data.access_token;
}

export async function getCompetitions() {
  const token = await handballLogin();

  const res = await fetch(`${BASE_URL}/api/partner/competitions`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Načtení soutěží selhalo: ${res.status} ${text}`);
  }

  return res.json();
}