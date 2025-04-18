import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const blogPosts = Array.from({ length: 20 }, (_, i) => ({
  title: `Exclusive Story ${i + 1}`,
  date: `April ${i + 1}, 2025`,
  excerpt: `Catch up on Lee Byung-hun's exciting journey in episode ${i + 1}...`,
  image: `https://source.unsplash.com/random/800x600?sig=${i}`,
  video: `https://www.youtube.com/embed/dQw4w9WgXcQ`, // Replace with actual video URLs
}));

const Blog = () => {
  useEffect(() => {
    ScrollReveal().reveal('.blog-post', {
      delay: 300,
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 200,
      reset: false,
      cleanup: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="blog-post bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{post.date}</p>
              <p className="mb-4">{post.excerpt}</p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={post.video}
                  title={post.title}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-64 md:h-96"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
