import { BoltIcon } from "@heroicons/react/20/solid";
import Button from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 flex justify-between items-center px-5 h-20 w-full border-b-2">
      {/* Logo */}
      <Link href="" className="h-full text-white  flex items-center space-x-2">
        <BoltIcon className="w-10" />
        <h1 className="text-4xl">StartupGPT</h1>
      </Link>
      {/* <Bars3Icon className="w-10" /> */}
      <Link href="/dashboard">
        <Button>
          <div className="text-lg px-3">Login</div>
        </Button>
      </Link>
    </header>
  );
}

// bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-300 via-blue-800 to-slate-100
