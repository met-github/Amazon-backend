
import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Gift Basket for Women"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81VsGd6C0KL._AC_UL320_.jpg"
          />

          <Product
            id="49538094"
            title="Wooden Decor"
            price={8.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71FQ7maDd9L._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Tom Ford `Oud Wood Eau de Parfum "
            price={230}
            rating={4}
            image="https://m.media-amazon.com/images/I/710+ntilt5L._AC_UL320_.jpg"
          />
          <Product
            id="23445930"
            title="Valentino Valentino Donna Born in Rome"
            price={125}
            rating={5}
            image="https://m.media-amazon.com/images/I/711fdw0zM3L._AC_UL320_.jpg"
          />
          <Product
            id="3254354345"
            title="Azzaro Proposed Chrom Eau de Parfum"
            price={28.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71EGR1UmAVL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="SEIM lace Appliqued edding Dress"
            price={1221}
            rating={4}
            image="https://m.media-amazon.com/images/I/618IzfpYE-L._MCnd_AC_UL320_.jpg"
          />
          <Product
            id="23445930"
            title="Off Sholder Prom Dress"
            price={109.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61SJDe8MInL._MCnd_AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Mermaid Prom Dress with Slit for Women"
            price={139.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71k+yK90d7L._AC_UL320_SR320,320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="LYS Ornament Candle Warmer Lamp, Dimmable Candle Lamp, Electric Candle Warmer with Timer"
            price={28.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61V7i80d8QL._AC_UL320_.jpg"
          />
          <Product
            id="78829334"
            title="ZINUS Curtis Upholstered Platform Bed Frame / Mattress Foundation / Wood Slat Support / No Box Spring Needed / Easy Assembly, Grey, Queen"
            price={99}
            rating={4}
            image="https://m.media-amazon.com/images/I/817gMGhTobL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
