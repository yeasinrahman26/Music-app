import FeaturedCourses from '@/components/FeaturedCourses';
import HeroSection from '@/components/HeroSection';
import Instructors from '@/components/Instructors';
import TestimonialCards from '@/components/TestimonialCards';
import UpcomingWebomars from '@/components/UpcomingWebomars';
import WhyChoiceUs from '@/components/WhyChoiceUs';
import React from 'react';

const Home = () => {
  return (
    <main className='min-h-screen bg-blacl/(0.96) antialiased bg-grid-white/(0.02) '>
      
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChoiceUs></WhyChoiceUs>
      <TestimonialCards></TestimonialCards>
      <UpcomingWebomars></UpcomingWebomars>
      <Instructors></Instructors>
    </main>
  );
};

export default Home;