import Banner from "@/components/Banner";
import PromoteCard from "@/components/PromoteCard";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col items-center justify-center bg-gray-50 p-10">
      <main className="flex w-full max-w-4xl flex-col items-center gap-8">
        <Banner />
        <PromoteCard />
      </main>
    </div>
  );
}
