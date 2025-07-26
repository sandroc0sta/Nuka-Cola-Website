import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
        <nav className="navbar">
          <li>
            <Link href="/#products">Our Products</Link>
          </li>
          <li>
            <a href="/#about">Company History</a>
          </li>
          <li>
            <a href="/#locations">Locations</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </nav>
      </header>
  );
}