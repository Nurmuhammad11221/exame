import React from 'react';

const Post = () => {
  const posts = [
    {
      id: 1,
      image: "/Blog1.png",
      title: "Today's best design trends for digital products",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      avatar: "/Blo1.png"
    },
    {
      id: 2,
      image: "/Blog2.png",
      title: "Today's best design trends for digital products",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      avatar: "/Blo"
    },
    {
      id: 3,
      image: "/Blog3.png",
      title: "Today's best design trends for digital products",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      avatar: "/Blo1.png"
    },
    {
      id: 4,
      image: "/Blog4.png",
      title: "Today's best design trends for digital products",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
      avatar: "/Blo1.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 font-sans">
      <h2 className="text-4xl font-bold text-[#232536] mb-12 text-left tracking-tight">
        Read Recent Post
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
            <div className="sm:w-1/2 overflow-hidden">
              <img 
                src={post.image} 
                alt="Post cover" 
                className="w-full h-64 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="sm:w-1/2 flex flex-col justify-center py-2">
              <h3 className="text-2xl font-bold text-[#232536] leading-tight mb-4 group-hover:text-[#592EA9] transition-colors">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-3">
                <img 
                  src={post.avatar} 
                  alt={post.author} 
                  className="w-8 h-8 rounded-full object-cover" 
                />
                <div className="text-sm">
                  <p className="font-bold text-[#232536]">{post.author}</p>
                  <p className="text-gray-400">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;