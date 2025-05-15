'use client';
import { useState } from 'react';
import Link from 'next/link';
import ProjectCard from '../Components/ProjectCard';
import EndResult from './TitanicDetail';

export default function Titanic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white p-6">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left Section (Pink Block + Year/Link) */}
        <div className="flex flex-col items-start">
          <p className="text-[#E4FF00] text-[32px] mb-2">{`[/> PROJECT NAME`}</p>

          {/* Pink Title Block */}
          <div className="bg-[#D61A69] text-white text-[32px] font-bold leading-tight p-4 mb-2">
            <p>TITANIC</p>
            <p>SURVIVAL</p>
            <p>PREDICTION</p>
          </div>

          {/* Year + Read More */}
          <div className="text-[20px] lg:text-[24px] mt-2">
            <span className="text-[#06FFFE] mr-2">2025</span>
            
            <button
              onClick={() => setIsOpen(true)}
              className="text-white hover:text-[#06FFFE]">{`[READ MORE]`}
            </button>

          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-[800px] flex-1">
          <p className="text-[#E4FF00] text-[28px] md:text-[32px] lg:text-[36px]  mb-2">{`[/> INFO`}</p>
          <p className="text-[20px] lg:text-[24px] mb-4 ">
            This project is a machine learning web app that predicts whether a passenger would survive 
            the Titanic disaster based on personal and travel information, using historical data and classification models, 
            with an interactive user interface for real-time predictions.
          </p>
          <p className="text-[20px] lg:text-[24px]  mb-1 ">DESIGN: FIGMA</p>
          <p className="text-[20px] lg:text-[24px] mb-1 ">TECH: NEXTJS , TAILWINDCSS</p>
          <p className="text-[20px] lg:text-[24px]  mb-1 break-all">
            https://titanic-survival-prediction-peach.vercel.app
          </p>
        </div>
      </div>

      {/* Visit Site */}
      <div className="mt-8 text-right lg:text-right text-center">
        <Link
          href="https://titanic-survival-prediction-peach.vercel.app"
          target="_blank"
          className="text-[#E4FF00] text-[28px] hover:underline"
        >
          VISIT SITE →
        </Link>
      </div>

      {/* Modal */}
      <ProjectCard
        year="2025"
        name="TITANIC SURVIVAL PREDICTION"
        role="Design & Coding"
        timeline="February - April 2025"
        description="This website was created to predict Titanic’s survival rate. 
        To analyze what type of person is most likely to survive the Titanic."
        overview="For a very long time, I have enjoyed watching Titanic. Its story astounded me. 
        I occasionally consider what kind of person would have the best chance of surviving if they were on the Titanic. 
        I therefore made the decision to create a website that predicts survival chance using data from Kaggle."
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imageUrl="/Titanic/titanic-vintage-image.jpg"
        siteUrl="https://titanic-survival-prediction-peach.vercel.app"
      >
        <EndResult />
      </ProjectCard>
    </div>
  );
}
