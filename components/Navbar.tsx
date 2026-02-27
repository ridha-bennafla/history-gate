import Link from "next/link";

interface NavLinkProps {
  text: string;
  href?: string;
  className?: string;
}

const Navbar = () => {
  return (
    <nav className="flex items-center gap-1">
      <NavLink href="/" text="Discover" />
      <NavLink
        href="/saved"
        text="Saved"
        className="cursor-not-allowed pointer-events-none"
      />
      <NavLink
        href="/premium"
        text="Premium"
        className="cursor-not-allowed pointer-events-none"
      />
    </nav>
  );
};

const NavLink = ({ href = "/", text, className }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`px-4 py-1.5 rounded-full text-nav-text-inactive hover:text-nav-text text-sm font-inter font-medium ${className}`}
    >
      {text}
    </Link>
  );
};

export default Navbar;
