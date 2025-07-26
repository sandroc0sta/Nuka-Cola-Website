import Link from 'next/link';
import Image from 'next/image';

export default function NukaColaHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">

      <div className="fallout-divider"></div>

      <div className="nuka-bg-wrapper">
        <section className="hero-content" id="hero">
          <div>
            <h1>Drink Nuka-Cola!</h1>
            <div className="hero-content-nested">
              <div className="hero-text">
                <div className="inner-text">
                  <p>Experience an explosion of flavor!</p>
                  <a href="#products" className="hero-button">
                    See Our Products
                  </a>
                </div>
              </div>

              <div className="logo-placeholder">
                <div className="inner-logo">
                  <Image src="./img/273be08c-3a32-46f6-a21c-d6bb3da22b85-removebg-preview.png" alt="Nuka-Cola Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

        <section id="products" className="products-section">
          <h2>Our Product Line</h2>
          <div className="product-grid">
            <div className="product-card">
              <Link href="/product/classic">

                <h3>Nuka-Cola Classic</h3>
                <p>The original taste that started it all! Refreshing cola with that signature Nuka kick.</p>


              </Link>
            </div>
            <div className="product-card">
              <Link href="/product/quantum">

                <h3>Nuka-Cola Quantum</h3>
                <p>Enhanced with strontium-90 for that extra glow! Limited edition blue formula.</p>


              </Link>
            </div>
            <div className="product-card">
              <Link href="/product/cherry">

                <h3>Nuka-Cherry</h3>
                <p>Sweet cherry flavor meets classic cola. Perfect for those special wasteland moments.</p>


              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>Since 2044</h2>
          <p>
            Nuka-Cola Corporation has been America&apos;s favorite soft drink for over 30 years. From our humble beginnings to
            becoming the most popular beverage in the wasteland, we&apos;ve always been committed to bringing you that perfect
            blend of flavor and refreshment.
          </p>
        </section>

    </div>
  );
}
