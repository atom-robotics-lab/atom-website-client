"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Poppins } from "next/font/google";
import { SleekWobbleCard } from '@/components/ui/upd-wobble';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const poppinsParagraph = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface BlogSection {
  title: string;
  image?: string;
  content: string;
}

interface Blog {
  heading: string;
  date: string;
  author: string;
  sections: BlogSection[];
}

const Blogs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/blogs/test.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error('Expected an array but received:', data);
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogs();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = useMemo(() => blogs.slice(indexOfFirstItem, indexOfLastItem), [indexOfFirstItem, indexOfLastItem, blogs]);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleCardClick = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-32 px-4 sm:px-8">
      {selectedBlog ? (
        <div className="w-full max-w-4xl mx-auto">
          <button onClick={() => setSelectedBlog(null)} className="text-blue-500 mb-4">
            &larr; Back to Blog List
          </button>
          <div className="mb-8">
            <h1 className={`${poppins.className} text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-blue-500`}>
              {selectedBlog.heading}
            </h1>
            <p className={`${poppins.className} text-lg mb-4`}>
              {selectedBlog.date} by {selectedBlog.author}
            </p>
            {selectedBlog.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-2 text-blue-500">{section.title}</h2>
                {section.image && (
                  <div className="w-full aspect-[5/2] mb-4 overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <p className={`${poppinsParagraph.className} text-white`}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <h1 className={`${poppins.className} text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-center text-blue-500 flex flex-col sm:flex-row items-center justify-center`}>
            <span className="mb-2 sm:mb-0">A. T. O. M</span>
            <span className="sm:ml-8">Blog</span>
          </h1>
          <p className={`${poppinsParagraph.className} text-lg mb-12 text-center`}>
            Get a glimpse of how our society functions with these fun blogs where we cover our experiences in competitions, project building, hackathons, and tons of other events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
            {currentBlogs.map((blog) => (
              <SleekWobbleCard
                key={blog.heading}
                containerClassName="flex flex-col overflow-hidden rounded-lg bg-neutral-800 w-full"
                onClick={() => handleCardClick(blog)}
              >
                {blog.sections[0]?.image && (
                  <div className="w-full aspect-[5/2] overflow-hidden">
                    <img
                      src={blog.sections[0].image}
                      alt={blog.heading}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm mb-2 text-blue-300">{blog.date}</p>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-blue-500 mb-4">
                    {blog.sections[0]?.title}
                  </h2>
                  <p className={`text-sm text-white flex-grow line-clamp-3`}>
                    {blog.sections[0]?.content.slice(0, 100)}...
                  </p>
                </div>
              </SleekWobbleCard>
            ))}
          </div>

          <div className="mt-8 flex justify-center space-x-4 flex-wrap">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  currentPage === index + 1 ? "bg-blue-500" : "bg-neutral-600 hover:bg-neutral-700"
                } text-white mb-2`}
                aria-label={`Page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Blogs;