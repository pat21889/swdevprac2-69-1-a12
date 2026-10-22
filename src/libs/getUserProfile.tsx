const API_BASE =
  process.env.NEXT_PUBLIC_BACKEND_URL ??
  "https://a08-venue-explorer-backend.vercel.app";

export default async function getUserProfile(token: string) {
  const response = await fetch(`${API_BASE}/api/v1/auth/me`, {
    method: "GET",
    headers: { authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Cannot get user profile");
  }
  return await response.json();
}
