import Users from "@/components/Users";
import Link from "next/link";

export default function Home() {
  return (
    <main>
     <Link href={'/login'}>Login</Link>
     <Users />
    </main>
  );
}
