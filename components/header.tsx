import Image from 'next/image';

const Header = () => {
  return (
    <header className="row-start-1 flex items-center justify-center gap-16">
      <Image
        aria-hidden
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="text-2xl font-bold">Next.js</h1>
    </header>
  );
};

export default Header;
