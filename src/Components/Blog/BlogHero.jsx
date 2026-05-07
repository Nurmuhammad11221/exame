import { Link } from 'react-router-dom';

const BlogHero = () => {
  const trendingPosts = [
    {
      title: "Great design expectations prejudice in digital products in Next Year",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      img: "/Blo1.png"
    },
    {
      title: "Great design expectations prejudice in digital products in Next Year",
      author: "Mathew Jasele",
      date: "Jan 19, 2021",
      img: "/Hussen.png"
    },
    {
      title: "Great design expectations prejudice in digital products in Next Year",
      author: "Hussen Abakas",
      date: "Jan 19, 2021",
      img: "/Might.png"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-6 md:px-12 font-sans">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-2/3">
          <div className="mb-6">
            <div className="w-4 h-4 bg-orange-400 mb-4"></div>
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Trending</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#232536] mt-4 leading-tight">
              Breaking the code How <br className="hidden md:block" /> did we build our Figma <br className="hidden md:block" /> plugin
            </h1>
            <p className="text-gray-500 mt-6 leading-relaxed max-w-xl">
              It is a long established fact that a reader will be distracted by the readable content 
              of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.
            </p>
            <Link target="_blank" to="/BlogInner" className="text-[#592EA9] font-semibold mt-4 inline-block hover:underline">
              Read More <span>→</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <img src="/Blo1.png" className="w-10 h-10 rounded-full" alt="Author" />
            <div className="text-sm">
              <span className="text-[#592EA9] font-bold">Andrew Jonson</span>
              <span className="text-gray-400 ml-2">| Posted on 27th January 2021</span>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/OurVs.png" className="w-full h-[400px] object-cover"
            />
            <div className="absolute top-0 right-0 w-4 h-24 bg-blue-600"></div>
          </div>
        </div>

        <div className="lg:w-1/3 bg-[#FDEBD0] p-8 lg:p-12 relative h-fit">
            <div className="absolute top-0 right-0 p-2 flex gap-1">
                <div className="w-3 h-3 bg-blue-600"></div>
                <div className="w-3 h-3 bg-orange-400"></div>
            </div>

          <div className="space-y-10">
            {trendingPosts.map((post, index) => (
              <div key={index} className="select-none"> 
                <h3 className="text-xl font-bold text-[#232536] leading-snug"> 
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 mt-4">
                  <img src={post.img} alt={post.author} className="w-8 h-8 rounded-full" />
                  <div className="text-xs">
                    <p className="font-bold text-[#232536]">{post.author}</p>
                    <p className="text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogHero;