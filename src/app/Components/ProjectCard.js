'use client';

import { useState } from 'react';

export default function ProjectModal({ year, name, role, timeline, description, overview }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Year + Read More */}
      <div className="flex text-[20px] sm:text-[24px] mt-2 ml-0 sm:ml-[60px] gap-4">
        <p className="text-[#06FFFE]">{year}</p>
        <button onClick={() => setIsOpen(true)} className="text-white underline">Read More</button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div className="bg-white max-w-[800px] w-full p-6 rounded-lg text-black relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-3 text-black text-xl">×</button>

            {/* Header */}
            <h2 className="text-[#D61A69] text-2xl font-bold mb-2">{name}</h2>
            <p className="text-sm mb-2">&lt;UX/UI Designs&gt; &lt;Uni Project&gt;</p>
            <p className="mb-4">{description}</p>

            {/* Info */}
            <div className="flex justify-between text-sm text-gray-500 mt-4">
              <span><strong>Role:</strong> {role}</span>
              <span><strong>Timeline:</strong> {timeline}</span>
            </div>

            {/* Overview */}
            <div className="mt-6 border-t pt-4 text-sm text-gray-700">
              <h3 className="text-[#D61A69] font-semibold mb-2">Overview</h3>
              <p>{overview}</p>
            </div>

            {/* 4-Step Section */}
            <div className="mt-6 border border-[#D61A69] p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
              <div>
                <p className="text-[#D61A69] font-bold">{`<RESEARCH>`}</p>
                <p className="mt-1">Gatering Data</p>
              </div>
              <div>
                <p className="text-[#D61A69] font-bold">{`<DESIGN>`}</p>
                <p className="mt-1">Select style<br />of Website</p>
              </div>
              <div>
                <p className="text-[#D61A69] font-bold">{`<PROTOTYPE>`}</p>
                <p className="mt-1">Responsive & Layout</p>
              </div>
              <div>
                <p className="text-[#FFFFFF] font-bold">{`<IMPLEMENT>`}</p>
                <p className="mt-1">Coding & Debugging</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}