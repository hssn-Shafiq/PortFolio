import AboutSec from "../../Components/AboutSec";
import Clients from "../../Components/Clients";
import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import PageTitle from "../../Components/PageTitle";
import ServicesCard from "../../Components/ServicesCards";
import Skills from "../../Components/Skills";
import Stats from "../../Components/Stats";
import TestimonialSlider from "../../Components/TestimonialSlider";

function About() {
    return ( <>
        <Header/>
        <main className="main">
            <PageTitle 
            title="About"
            description=" Are you looking for a flexible IT specialist to help you
                    improve your web presence and manage your online business
                    operations? Look no further."
                    current="about"
            />
            <AboutSec/>
            <Stats/>
            <Skills/>
            <ServicesCard />
            <Clients/>
            <TestimonialSlider/>
            <Footer/>
        </main>
    </>  );
}

export default About;