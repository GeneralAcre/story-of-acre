'use client';
import { useState } from 'react';
import Link from 'next/link';
import ProjectCard from '../Components/ProjectCard';
import ProjectModal from '../Components/ProjectCard';

export default function Titanic() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white p-6">
      <div className="flex items-start gap-4 flex-wrap">

        {/* Left Section */}
        <div>
          <p className="text-[#E4FF00] text-[32px] mb-2">{`[/> PROJECT NAME`}</p>

          {/* Pink Title Block */}
          <div className="bg-[#D61A69] text-white text-[32px] font-bold leading-tight p-4 inline-block mb-2">
            <p>TITANIC</p>
            <p>SURVIVAL</p>
            <p>PREDICTION</p>
          </div>

        </div>

        {/* Info Section */}
        <div className="max-w-xl">
          <p className="text-[#E4FF00] text-[32px] mb-2">{`[/> INFO`}</p>
          <p className="text-sm leading-snug mb-4">
            This project is a machine learning web app that predicts whether a passenger would survive the Titanic disaster based on personal and travel information, using historical data and classification models, with an interactive user interface for real-time predictions.
          </p>
          <p className="text-sm mb-1">DESIGN: FIGMA</p>
          <p className="text-sm mb-1">TECH: NEXTJS , TAILWINDCSS</p>
          <p className="text-sm mb-1 break-all">
            https://titanic-survival-prediction-peach.vercel.app
          </p>
        </div>

        {/* Visit Site */}
        <div className="ml-auto mt-2">
          <Link
            href="https://titanic-survival-prediction-peach.vercel.app"
            target="_blank"
            className="text-[#E4FF00] text-[28px] hover:underline"
          >
            VISIT SITE →
          </Link>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
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
      />
    </div>
  );
}
