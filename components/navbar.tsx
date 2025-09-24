import Link from 'next/link';
import { useNavStore } from './zustand/navSlice';
import { Hedvig_Letters_Sans } from 'next/font/google';
import { Menu, X } from 'lucide-react';

const hedvig_sans = Hedvig_Letters_Sans({
  weight: '400',
  subsets: ['latin'],
});

function Navbar() {
  const navState = useNavStore((state) => state.isOpen);
  const toggleNav = useNavStore((state) => state.toggleMenu);

  return (
    <nav>
      <div
        className={`hidden md:grid gap-2 grid-flow-col items-center font-text-center justify-center mb-4 md:gap-4 md:grid-cols-5 ${hedvig_sans.className}`}
      >
        <Link
          href="/"
          className="flex items-center tracking-wider justify-center px-4 py-2 md:mx-5 text-azb-5 font-bold text-xl bg-azg-2 rounded-md hover:text-azg-2 hover:bg-azb-1"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="flex items-center justify-center tracking-wider px-4 py-2 md:mx-5 text-azb-5 font-bold text-xl bg-azg-2 rounded-md hover:text-azg-2 hover:bg-azb-1"
        >
          About
        </Link>
        <Link
          href="/portfolio"
          className="flex items-center justify-center tracking-wider px-4 py-2 md:mx-5 text-azb-5 font-bold text-xl bg-azg-2 rounded-md hover:text-azg-2 hover:bg-azb-1"
        >
          Portfolio
        </Link>
        <Link
          href="/blog"
          className="flex items-center justify-center tracking-wider px-4 py-2 md:mx-5 text-azb-5 font-bold text-xl bg-azg-2 rounded-md hover:text-azg-2 hover:bg-azb-1"
        >
          Blog
        </Link>
        <Link
          href="/pricing"
          className="flex items-center justify-center tracking-wider px-4 py-2 md:mx-5 text-azb-5 font-bold text-xl bg-azg-2 rounded-md hover:text-azg-2 hover:bg-azb-1"
        >
          Pricing
        </Link>
      </div>

      <div className="md:hidden p-2 flex items-center justify-center">
        <button
          onClick={toggleNav}
          className="p-2 text-azg-2 text-shadow-lg shadow-azb-5 bg-azb-1 rounded-full mb-4 hover:text-azb-1 hover:bg-azg-2 focus:outline-none md:mb-0"
        >
          {navState ? <X size={48} /> : <Menu size={48} />}
        </button>
      </div>

      {navState && (
        <div
          className={`flex flex-col gap-2 items-center font-text-center justify-center ${hedvig_sans.className} mt-6 md:hidden `}
        >
          <Link
            href="/"
            className="w-full text-center px-4 py-2 text-azb-5 font-bold text-lg bg-azg-2 rounded-md hover:text-azg-2 hover:bg-azb-1"
            onClick={toggleNav}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="w-full text-center px-4 py-2 text-azb-5 font-bold text-lg bg-azg-2 rounded-md hover:text-azg-2 hover:bg-azb-1"
            onClick={toggleNav}
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="w-full text-center px-4 py-2 text-azb-5 font-bold text-lg bg-azg-2 rounded-md hover:text-azg-2 hover:bg-azb-1"
            onClick={toggleNav}
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="w-full text-center px-4 py-2 text-azb-5 font-bold text-lg bg-azg-2 rounded-md hover:text-azg-2 hover:bg-azb-1"
            onClick={toggleNav}
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="w-full text-center px-4 py-2 text-azb-5 font-bold text-lg bg-azg-2 rounded-md hover:text-azg-2 hover:bg-azb-1"
            onClick={toggleNav}
          >
            Pricing
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
