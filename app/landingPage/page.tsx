
import React from "react";
import HeroSection from "./coponantes/HeroSection";
import ApplicationServices from "./coponantes/ApplicationServices";
import TypesofCompetitions from "./coponantes/TypesCompetitions";

const landingPage = () => {
    return (
        <div className="">
            <HeroSection />
            <ApplicationServices/>
            <TypesofCompetitions/>
        </div>
    );
};

export default landingPage;
