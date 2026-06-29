import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container flex h-16 w-full items-center px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-primary"
        >
          <Briefcase />
          JobTracker
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="default">Start for Free</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
