import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import InnerBlogHero from '../Components/Blog/InnerBlogHero';
import BlogLoading from '../Components/Blog/BlogLoading';
import TopFooter from '../Components/TopFooter/TopFooter';
import Footer from '../Components/Footer/Footer';

const BlogInner = () => {
    return (
        <div>
            <Navbar />
            <InnerBlogHero />
            <BlogLoading />,
            <TopFooter />
            <Footer />
        </div>
    );
}

export default BlogInner; 