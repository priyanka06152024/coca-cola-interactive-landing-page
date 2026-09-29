
import React, { useState } from "react";

import Navbar from "./Components/Navbar.jsx";
import Loader from "./Components/Loader.jsx";
import Marquee from "./Components/Marquee.jsx";
import Slider from "./Components/Slider.jsx";
import Product from "./Components/Product.jsx";
import Brands from "./Components/Brands.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* ==============================
          LOADER
      ============================== */}

      {loading && (
        <Loader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      {/* ==============================
          WEBSITE
      ============================== */}

      {!loading && (
        <>
          <Navbar />

          <Product />

          <Marquee />

          <Slider />

          <Brands />

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

