import Card from "./Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson> | VenueJson;
}) {
  const venuesJsonReady = await venuesJson;

  return (
    <div className="flex w-full flex-wrap items-stretch justify-center gap-6">
      {venuesJsonReady.data.map((venue: VenueItem) => (
        <Card
          key={venue.id}
          vid={venue.id}
          venueName={venue.name}
          imgSrc={venue.picture}
        />
      ))}
    </div>
  );
}
