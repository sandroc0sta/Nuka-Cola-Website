import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
        <nav className="navbar">
          <li>
            <Link href="/#products">Our Products</Link>
          </li>
          <li>
            <Link href="/#about">Company History</Link>
          </li>
          <li>
            <Link href="/#locations">Locations</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </nav>
      </header>
  );
}