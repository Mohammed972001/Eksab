
import React from "react";
import HeroSection from "./coponantes/HeroSection";
import ApplicationServices from "./coponantes/ApplicationServices";
import TypesofCompetitions from "./coponantes/TypesCompetitions";
import TopQuestions from "./coponantes/TopQuestions";
import SendEmail from "./coponantes/SendEmail";
import Startnaw from "./Startnaw";
import Ourpartners from "./coponantes/Ourpartners";
import Footeer from "./coponantes/Footer";
import AboutUs from "./coponantes/AboutUs";


const landingPage = () => {
    return (
        <div className="">
            <HeroSection />
            <AboutUs/>
            <ApplicationServices/>
            <TypesofCompetitions/>
            <TopQuestions/>
            <SendEmail/>
            <Startnaw/>
            <Ourpartners/>
            <Footeer/>

        </div>
    );
};

export default landingPage;
