import { useEffect } from "react";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import PreLoader from "../../Components/PreLoader";

function Home() {
 
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
      </main>
      <Footer />

      <>
        {/* Scroll Top */}
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
        {/* Preloader */}
        {/* <PreLoader /> */}
      </>
    </>
  );
}

export default Home;
