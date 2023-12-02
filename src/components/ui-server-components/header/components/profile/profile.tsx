import Link from "next/link";

export default function Profile() {
  return (
    <Link href="/" className="flex flex-col">
      <p className="font-bold text-xl drop-shadow-sm hover:drop-shadow-md">Æ{/* Alper Erdoğan */}</p>
      <p className=" font-normal text-[16.5px] drop-shadow-sm">software developer</p>
    </Link>
  );
}
