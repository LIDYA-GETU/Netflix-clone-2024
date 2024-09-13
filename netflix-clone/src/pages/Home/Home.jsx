import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/banner.jsx";
import App from "../../App.jsx";
// import requests from '../../Utils/requests.jsx';
import RowList from "../../Components/Rows/RowList/RowList.jsx";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList/>
      <Footer />
    </>
  );
}

export default Home;
