import React from "react";
import FavDishes from "../../FavDishes";
import Footer from "../../Footer";
import HeroSection from "../../HeroSection";
import OurMenu from "../../OurMenu";
import RegistrationForm from "../../RegistrationForm";
import {
  heroObjOne,
  hero2,
  specialDishes,
  ourFavDishes,
  regData,
} from "./Data";
const Home = () => {
  return (
    <>
      <HeroSection {...heroObjOne} />
      <HeroSection {...hero2} />
      <FavDishes {...ourFavDishes} />
      <HeroSection {...specialDishes} />
      <OurMenu />
      <RegistrationForm {...regData} />
      <Footer />
    </>
  );
};

export default Home;
