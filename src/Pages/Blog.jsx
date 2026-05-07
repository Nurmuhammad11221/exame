import AllPost from "../Components/Blog/AllPost";
import BlogHero from "../Components/Blog/BlogHero";
import Post from "../Components/Blog/Post";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import TopFooter from "../Components/TopFooter/TopFooter";

const Blog = () => {
    return (
        <div>
            <Navbar />
            <BlogHero />
            <Post />
            <AllPost />
            <TopFooter />
            <Footer />
        </div>
    );
}

export default Blog;
