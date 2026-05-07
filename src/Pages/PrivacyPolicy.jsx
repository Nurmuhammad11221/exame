import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import PrivacyHero from '../Components/PrivacyPolicy/PrivacyHero';
import Loading from '../Components/PrivacyPolicy/Loading';
import Footer from '../Components/Footer/Footer';

const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar />
            <PrivacyHero />
            <Loading />
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
