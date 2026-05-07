
const AllPost = () => {
  const posts = [
    {
      id: 1,
      image: "/AllPost1.png",
      title: "We aim to attain the greatest satisfaction for our clients",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      avatar: "/Blo1.png"
    },
    {
      id: 2,
      image: "/AllPost2.png",
      title: "We aim to attain the greatest satisfaction for our clients",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      avatar: "/Blo1.png"
    },
    {
      id: 3,
      image: "/AllPost3.png",
      title: "We aim to attain the greatest satisfaction for our clients",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      avatar: "/Blo1.png"
    },
    {
      id: 4,
      image: "/AllPost5.png",
      title: "We aim to attain the greatest satisfaction for our clients",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      avatar: "/Blo1.png"
    },
    {
      id: 5,
      image: "/AllPost4.png",
      title: "We aim to attain the greatest satisfaction for our clients",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      avatar: "/Blo1.png"
    },
    {
      id: 6,
      image: "/AllPost6.png",
      title: "We aim to attain the greatest satisfaction for our clients",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      avatar: "/Blo1.png"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-[#232536] mb-12 border-b border-gray-100 pb-8">
        All posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {posts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="mb-6 overflow-hidden">
              <img 
                src={post.image} 
                alt="Post thumbnail" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#232536] leading-tight mb-4 group-hover:text-[#592EA9] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {post.desc}
              </p>

              <div className="flex items-center gap-3">
                <img 
                  src={post.avatar} 
                  alt={post.author} 
                  className="w-8 h-8 rounded-full object-cover" 
                />
                <div className="text-xs">
                  <p className="font-bold text-[#232536]">{post.author}</p>
                  <p className="text-gray-400">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllPost;