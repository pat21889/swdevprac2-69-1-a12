import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import TopMenuItem from "./TopMenuItem";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="fixed inset-x-0 top-0 z-30 h-12 overflow-hidden border-b border-white/10 bg-navy-blue shadow-sm">
      <div className="flex h-full w-full items-stretch justify-between px-16">
        <span className="flex items-center gap-6 text-lg font-semibold tracking-wide text-white">
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="text-sm font-medium underline"
          >
            {session ? "Sign-Out" : "Sign-In"}
          </Link>
          Venue Explorer
        </span>
        <div className="flex h-full items-stretch gap-5">
          <TopMenuItem title="My Booking" pageRef="/mybooking" />
          <TopMenuItem title="Booking" pageRef="/booking" />
          <span className="flex items-center">
            <Image
              src="/img/logo.png"
              alt="Venue Explorer logo"
              width={36}
              height={36}
              className="rounded-md ring-1 ring-white/25"
            />
          </span>
        </div>
      </div>
    </nav>
  );
}
