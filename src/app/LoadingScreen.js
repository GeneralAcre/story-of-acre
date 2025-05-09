'use client';

import '@fontsource/press-start-2p';

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-press-start-2p px-4 z-50">
      <h1 className="text-xl sm:text-2xl md:text-3xl animate-pulse mb-8">
        LOADING<span className="animate-bounce">...</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-1 max-w-full px-2">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-6 sm:w-6 sm:h-8 md:w-8 md:h-10 border-2 border-white bg-black overflow-hidden"
          >
            <div
              className="h-full bg-[#d8ff4a]"
              style={{
                width: '100%',
                animation: 'fillBox 0.5s steps(1) forwards',
                animationDelay: `${i * 0.2}s`, // Adjust delay to ensure filling starts on time
              }}
            />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes fillBox {
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
