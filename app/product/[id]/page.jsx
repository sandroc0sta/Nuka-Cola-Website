'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const productData = {
  classic: {
    name: "Nuka-Cola Classic",
    description: "The original taste that started it all! Experience the classic, refreshing cola with that unmistakable Nuka kick—perfectly balanced with a burst of sweet and tangy flavors. Each sip delivers a crisp fizz that revitalizes and energizes, making it the go-to drink for adventurers and thrill-seekers alike. Whether you're exploring the wasteland or just need a moment of nostalgia, Nuka-Cola's iconic taste never fails to deliver satisfaction.",
  },
  quantum: {
    name: "Nuka-Cola Quantum",
    description: "Enhanced with strontium-90 for that extra glow! Limited edition blue formula. Nuka-Cola Quantum isn’t just a drink — it’s an experience. Infused with a unique blend of isotopes, this radiant blue soda delivers an electrifying burst of energy that lights up the wasteland nights. Legendary for its vibrant glow and intense refreshment, Quantum gives you the edge you need to face any adventure. Perfect for thrill-seekers and collectors alike, this rare concoction is highly sought after by those who crave a powerful pick-me-up with a radioactive twist.",
  },
  cherry: {
    name: "Nuka-Cherry",
    description: "Sweet cherry flavor meets classic cola. Perfect for those special wasteland moments. Nuka-Cherry blends the nostalgic taste of rich, ripe cherries with the familiar fizz of classic Nuka-Cola, creating a deliciously smooth and refreshing treat. Whether you’re unwinding after a long day of scavenging or celebrating a rare victory, this cherry-infused delight adds a touch of sweetness to the harsh wasteland life. Its balanced flavor and subtle tartness make it a favorite among wanderers seeking a little comfort and joy in every sip.",
  },
  dark: {
    name: "Nuka-Cola Dark",
    description: "Bold and mysterious — cola with a hint of pre-war bourbon flavor. Nuka-Dark is the enigmatic sibling in the Nuka-Cola family, offering a deep, rich cola taste with subtle undertones of aged bourbon from before the Great War. This sophisticated blend delivers a smooth yet powerful flavor, perfect for those who crave something with a little more character and complexity. Whether enjoyed around a campfire or in the shadows of a forgotten city, Nuka-Dark captures the spirit of the old world while fueling your next adventure in the wasteland.",
  },
  grape: {
    name: "Nuka-Grape",
    description: "Fruity fusion of grape and fizz. A favorite at Nuka-World. Nuka-Grape bursts with a vibrant blend of juicy grape sweetness and refreshing carbonation, creating a lively and playful soda experience. Beloved by thrill-seekers and festival-goers alike at Nuka-World, this fizzy treat brings a splash of fun to every sip. Whether you’re cooling off after a rollercoaster ride or sharing stories around the campfire, Nuka-Grape’s bright, fruity flavor keeps the good times rolling in the wasteland.",
  },
};

const productIDs = Object.keys(productData);

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const product = productData[id];

  if (!product) {
    return <div className="products-section"><h2>Product Not Found</h2></div>;
  }

  const currentIndex = productIDs.indexOf(id);

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + productIDs.length) % productIDs.length;
    router.push(`/product/${productIDs[prevIndex]}`);
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % productIDs.length;
    router.push(`/product/${productIDs[nextIndex]}`);
  };

  return (
    <div className="products-center-wrapper">
      <div
        key={id}
        style={{
          transition: "all 0.4s ease-in-out",
          opacity: 1,
          transform: "translateY(0)",
        }}
        className="product-transition-wrapper"
      >
        <h2 style={{ textAlign: "center", fontSize: "40px" }}>{product.name}</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "500px",
            Width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flexGrow: 1,
              fontSize: "20px", 
              overflowWrap: "break-word", 
            }}
          >
            <p>{product.description}</p>
          </div>

          <div style={{ width: "400px", flexShrink: 0 }}>
            <img
              src={`/img/${id}.png`}
              alt={product.name}
              style={{
                height: "400px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                marginLeft: "120px", 
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1.5rem", marginTop: "1rem" }}>
        <button className='switchProductsButton' onClick={goPrev} style={{ cursor: "pointer" }}>⬅</button>
        <button className='switchProductsButton' onClick={goNext} style={{ cursor: "pointer" }}>➡</button>
      </div>
    </div>
  );
}