import Link from "next/link";

interface TopMenuItemProps {
  title: string;
  pageRef: string;
}

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      className="flex h-full items-center px-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-navy-blue"
    >
      {title}
    </Link>
  );
}
