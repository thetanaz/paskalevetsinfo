import Link from "next/link";

export default function Footer() {
  const date = new Date();

  const year = date.getFullYear();
  return (
    <footer className="flex bg-green-100 w-full rounded-t-lg text-center text-green-950 justify-center mx-auto text-xs font-light py-1">
      <Link href="https://tanaz.dev">
        създаден от Атанас Атанасов &copy; {year} г.{" "}
      </Link>
    </footer>
  );
}
