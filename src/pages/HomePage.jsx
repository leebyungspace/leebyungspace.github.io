import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';

const HomePage = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-white'>
      <div className='w-full max-w-4xl mb-8'>
        <ImageCarousel />
      </div>

      {/* Info Section */}
      <section className='bg-gray-800 text-white py-12 px-6 rounded-2xl m-4 shadow-lg max-w-4xl text-center'>
        <p className='mb-4'>
          Lee has been named Gallup Korea's Film Actor of the Year in 2012 and Gallup Korea's Television Actor of the Year in 2018.
          He was also the first South Korean actor to present an Oscar at the Academy Awards and is a member of the Academy of Motion Picture Arts and Sciences.
          Lee and Ahn Sung-ki were the first South Korean actors to imprint their hand and foot prints on the forecourt of Grauman's Chinese Theatre in Hollywood, Los Angeles.
        </p>
        <Link
          to="/about"
          className="inline-block mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          See More
        </Link>
      </section>

      {/* Meet and Greet */}
      <section className="bg-gray-800 text-white py-12 px-4 flex flex-col items-center text-center rounded-2xl m-4 shadow-lg">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block pb-2">
          Meet & Greet Opportunities
        </h2>
        <p className="max-w-2xl text-lg mb-6">
          Don’t miss your chance to meet Lee Byung-hun in person! We host exclusive meet-and-greet events for dedicated fans.
          These sessions include photo ops, personalized autographs, and behind-the-scenes stories.
        </p>
        <div className="bg-black p-6 rounded-xl shadow-md max-w-md w-full">
          <Link to="/meetandgreet">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              Reserve Your Spot
            </button>
          </Link>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="bg-gray-800 text-white py-12 px-6 rounded-2xl m-4 shadow-lg max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Upcoming Projects</h2>
        <p className="mb-4">🎬 <strong>“Shadow Operative”</strong> – A political thriller expected to release early next year.</p>
        <p className="mb-4">🎥 <strong>“Echoes of Silence”</strong> – A romantic drama set in post-war Korea.</p>
        <p className="mb-4">📺 <strong>Netflix Series</strong> – Lee is rumored to star in an international action-spy series.</p>
      </section>

      {/* Fan Highlights */}
      <section className="bg-gray-800 text-white py-12 px-6 rounded-2xl m-4 shadow-lg max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Lee's Highlights</h2>
        <p className="mb-4">Most times its the reflection of life that keeps us going and moving forward. Also, having taking photos is just a way 
          of capturing the moment.
        </p>
        <p className="mb-4">
          📸 Check out his little <Link to="/gallery" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"> gallery</Link> collection filled with unforgettable moments.
        </p>
      </section>

      {/* Behind the Scenes */}
      <section className="bg-gray-800 text-white py-12 px-6 rounded-2xl m-4 shadow-lg max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Behind the Scenes</h2>
        <p className="mb-4">
          Get a sneak peek into Lee’s training sessions, filming process, and personal reflections shared exclusively with his fan club.
        </p>
        <button
          onClick={() => setShowComingSoon(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Read Blog Posts
        </button>
        {showComingSoon && (
          <div className="mt-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg shadow">
            🚧 Blog Coming Soon – Stay Tuned!
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />        
    </div>
  );
};

export default HomePage;
