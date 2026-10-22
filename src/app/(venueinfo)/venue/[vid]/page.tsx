import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venueDetail = await getVenue(vid);
  const venue = venueDetail.data;

  return (
    <div className="flex min-h-[calc(100vh-3rem)] items-start justify-center bg-gray-50 p-10">
      <main className="flex w-full max-w-4xl items-start gap-6 rounded-lg border bg-white p-6 shadow">
        <div className="relative h-48 w-64 shrink-0 overflow-hidden rounded-2xl">
          <Image
            src={venue.picture}
            alt={venue.name}
            fill
            sizes="256px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 text-gray-900">
          <h1 className="text-xl font-bold">{venue.name}</h1>
          <div>Address: {venue.address}</div>
          <div>District: {venue.district}</div>
          <div>Province: {venue.province}</div>
          <div>Postal Code: {venue.postalcode}</div>
          <div>Tel: {venue.tel}</div>
          <div>Daily Rate: {venue.dailyrate}</div>
        </div>
      </main>
    </div>
  );
}
