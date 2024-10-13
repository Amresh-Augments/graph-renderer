import Link from "next/link";
import { delay } from "@/lib/helpers";

export default async function Header({
  name,
}: Readonly<{
  name: string;
}>) {
  await delay(1000);

  return (
    <header className="bg-gradient-to-r from-teal-600 to-teal-400 p-4 tracking-widest uppercase text-lg font-bold text-white z-10 shadow-md">
      <Link href="/">Graph Renderer</Link>
      <span className="float-right bg-white px-3 text-teal-600 rounded">
        {`@${name}`}
      </span>
    </header>
  );
}