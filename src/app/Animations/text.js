export default function MovingText() {
  return (
    <div className="marquee-wrapper fixed top-0 left-0 w-full bg-[#d8ff4a] z-50 h-10 sm:h-12 overflow-hidden whitespace-nowrap relative">
    <div className="marquee-content inline-block whitespace-nowrap animate-marquee text-black font-bold text-sm sm:text-base uppercase tracking-wider py-2">
      {/* Original content */}
      <span className="mx-8">EXPERIENCE MY PORTFOLIO //</span>
      <span className="mx-8">EXPERIENCE MY PORTFOLIO //</span>
      <span className="mx-8">EXPERIENCE MY PORTFOLIO //</span>
      <span className="mx-8">EXPERIENCE MY PORTFOLIO //</span>
      {/* Duplicated content */}
      <span className="mx-8">EXPERIENCE MY PORTFOLIO //</span>
      <span className="mx-8">EXPERIENCE MY PORTFOLIO //</span>
      <span className="mx-8">EXPERIENCE MY PORTFOLIO //</span>
      <span className="mx-8">EXPERIENCE MY PORTFOLIO //</span>
    </div>
  </div>
  );
}