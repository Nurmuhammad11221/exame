import React from 'react';
import Hero from '../Components/CompanyHero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import OurStory from '../Components/CompanyHero/OurStory';
import OurEx from '../Components/CompanyHero/OurEx';
import OurVision from '../Components/CompanyHero/OurVision';
import OurTeam from '../Components/CompanyHero/OurTeam';
import Footer from '../Components/Footer/Footer';
import TopFooter from '../Components/TopFooter/TopFooter';

const CompanyPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <OurStory />
            <OurEx />
            <OurVision />
            <OurTeam />
            <TopFooter />
            <Footer />
        </div>
    );
}

export default CompanyPage;
