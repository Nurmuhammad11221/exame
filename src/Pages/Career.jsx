import React from 'react';
import Header from '../Components/Career/Header';
import Navbar from '../Components/Navbar/Navbar';
import Card from '../Components/Career/Card'; 
import OurWork from '../Components/Career/OurWork';
import TopFooter from '../Components/TopFooter/TopFooter';
import Footer from '../Components/Footer/Footer';

const Career = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Card />
            <OurWork />
            <TopFooter />
            <Footer />
        </div>
    );
}

export default Career;
