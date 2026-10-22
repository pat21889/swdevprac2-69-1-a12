import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default async function VenuePage() {
  const venues = getVenues();

  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col items-center bg-gray-50 p-10">
      <main className="flex w-full max-w-4xl flex-col items-center gap-8">
        <h1 className="text-2xl font-bold text-gray-900">Select Venue</h1>
        <VenueCatalog venuesJson={venues} />
      </main>
    </div>
  );
}
