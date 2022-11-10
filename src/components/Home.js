import React from "react";
import Categories from "./Categories";
import Headline from "./Headline";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Headline />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
