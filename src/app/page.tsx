import React from 'react';
import Header from './components/Header/header';
import Body from "./components/Body/body";
import Card from './components/cards/card';
import SlickSlide from './components/slickslide/slickslide';
import AdvancedCourses from './components/Advanced_courses/advancedcourses';
import Courses from './components/CoursesAdvanced/Courses';
import Footer from './components/Footer/Footer';



// Export metadata for the document head
export const metadata = {
  title: 'Governor Initiative',
  description: 'governorsindh.com',
  keywords: 'cloud, AI, solopreneur, development',
};

const Page = () => {
  return (
    <div className="w-full h-full bg-white">
      {/* Navbar should be correctly placed here */}
      <Header />
      <Body />
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10">
        
        <h1 className=" text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem]
        leading[1.75rem] text-main font-extrabold m-auto
        md:w-[95%] text-20px text-[#044E83] ">
          
   Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="ml-0 mr-0 mb-8 sm:mt-10 mt-7 xl:text-[1.25rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify">
          The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>
      </div>
      <Card />
      <SlickSlide />
      <AdvancedCourses />
      <Courses />
      <Footer/>
    </div>
  );
};

export default Page;
