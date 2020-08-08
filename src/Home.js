import React from "react";

import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />

      <div className="home__row">
        <Product
          id="123123455"
          title="The lean StartUp: How Constant ivotation"
          price={900.25}
          rating={5}
          image="https://www.junglescout.com/wp-content/uploads/2020/06/homepage-laptop-floating-mockup.png"
        />
        <Product
          id="12312345"
          title="The lean StartUp: How Constant ivotation"
          price={200.15}
          rating={3}
          image="https://img10.jd.co.th/n0/jfs/t10/280/2782220265/112234/fbcb5aa0/5ebb5c81N4a2aad86.jpg!q70.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12312334"
          title="The lean StartUp: How Constant ivotation"
          price={150.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="12312398"
          title="The lean StartUp: How Constant ivotation"
          price={22.96}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="12312675"
          title="The lean StartUp: How Constant ivotation"
          price={54.96}
          rating={3}
          image="https://mercular.s3.ap-southeast-1.amazonaws.com/upload/products/2018/08/DOSS-BE2-Wireless-Headphone-1.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12312645"
          title="The lean StartUp: How Constant ivotation"
          price={985.96}
          rating={4}
          image="https://topesdegama.com/app/uploads-topesdegama.com/2020/05/Xiaomi-Mi-LED-TV-4A-1024x693.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
