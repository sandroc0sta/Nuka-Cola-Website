import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
        <section className="footer-section">
          <h3>Company Info</h3>
          <p>Nuka-Cola Corporation</p>
          <p>Est. 2044</p>
          <p>Washington D.C.</p>
          <p>Pre-War America&apos;s #1 Soft Drink</p>
        </section>

        <section className="footer-section">
          <h3>Products</h3>
          <ul>
            <li>
              <Link className="footer-products" href="/product/classic">Nuka-Cola Classic</Link>
            </li>
            <li>
              <Link className="footer-products" href="/product/quantum">Nuka-Cola Quantum</Link>
            </li>
            <li>
              <Link className="footer-products" href="/product/cherry">Nuka-Cherry</Link>
            </li>
            <li>
              <Link className="footer-products" href="/product/dark">Nuka-Cola Dark</Link>
            </li>
            <li>
              <Link className="footer-products" href="/product/grape">Nuka-Grape</Link>
            </li>
          </ul>
        </section>

        <section className="footer-section" id="locations">
          <h3>Locations</h3>
          <p>Find Nuka-Cola at:</p>
          <ul>
            <li>Vault-Tec Vending Machines</li>
            <li>Super-Duper Marts</li>
            <li>Red Rocket Stations</li>
            <li>Nuka-World Theme Park</li>
          </ul>
          <p className="disclaimer">*Availability may vary post-nuclear event</p>
        </section>
      </footer>
  );
}