"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Poppins } from "next/font/google";
import { Card, Carousel } from '@/components/ui/apple-cards-carousel';

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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-32 px-4 sm:px-8">
      <h1 className={`${poppins.className} text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-center text-blue-500 flex flex-col sm:flex-row items-center justify-center`}>
        <span className="mb-2 sm:mb-0">A. T. O. M</span>
        <span className="sm:ml-8">Blogs</span>
      </h1>
      <p className={`${poppinsParagraph.className} text-xl sm:text-2xl font-bold mb-12 text-center max-w-4xl`}>
        Get a glimpse of how our society functions with these fun blogs where we cover our experiences in competitions, project building, hackathons, and tons of other events.
      </p>

      <Carousel
        items={currentBlogs.map((blog, index) => (
          <Card
            key={blog.heading}
            card={{
              src: blog.sections[0]?.image || '',
              title: blog.sections[0]?.title || blog.heading,
              category: `${blog.date} | ${blog.author}`, // Combine date and author
              content: (
                <>
                  {blog.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-8">
                      {/* Only display the heading for sections after the first one */}
                      {sectionIndex > 0 && (
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-2 text-blue-500">{section.title}</h2>
                      )}
                      {section.image && (
                        <div className="w-full mb-4 card-img-container">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      )}
                      <p className={`${poppinsParagraph.className} text-black`}>{section.content}</p>
                    </div>
                  ))}
                </>
              ),
            }}
            index={index}
            layout={true}
          />
        ))}
      />
    </div>
  );
};

export default Blogs;
