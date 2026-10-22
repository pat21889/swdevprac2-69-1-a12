const API_BASE =
  process.env.NEXT_PUBLIC_BACKEND_URL ??
  "https://a08-venue-explorer-backend.vercel.app";

export default async function getVenue(
  id: string,
): Promise<{ success: boolean; data: VenueItem }> {
  const response = await fetch(`${API_BASE}/api/v1/venues/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch venue");
  }
  return await response.json();
}
