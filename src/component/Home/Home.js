import React from "react";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Info from "./Info/Info";
import NavBar from "./NavBar/NavBar";
import Review from "./Review/Review";
import Service from "./Service/Service";
import Video from "./Video/Video";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Info />
      <Service />
      <Video />
      <Review />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
