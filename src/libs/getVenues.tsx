const API_BASE =
  process.env.NEXT_PUBLIC_BACKEND_URL ??
  "https://a08-venue-explorer-backend.vercel.app";

export default async function getVenues(): Promise<VenueJson> {
  const response = await fetch(`${API_BASE}/api/v1/venues`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch venues");
  }
  return await response.json();
}
