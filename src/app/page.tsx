import FeaturedCourses from '@/components/FeaturedCourses';
import HeroSection from '@/components/HeroSection';
import React from 'react';

const Home = () => {
  return (
    <main className='min-h-screen bg-blacl/(0.96) antialiased bg-grid-white/(0.02) '>
      
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
    </main>
  );
};

export default Home;