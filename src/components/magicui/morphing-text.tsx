// components/magicui/morphing-text.tsx
"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class concatenation

const morphTime = 3;
const cooldownTime = 1;

// Helper to check if a text item is a string array (for multi-line)
type TextItem = string | string[]; // Corrected to allow string arrays of any length

const useMorphingText = (texts: TextItem[]) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  // Helper to get the displayable string for the morphing logic
  // (This function might not be strictly needed for innerHTML setting below,
  // but good to keep if you also want a plain text version elsewhere)
  const getDisplayString = useCallback((textItem: TextItem): string => {
    return Array.isArray(textItem) ? textItem.join(' ') : textItem;
  }, []);

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) return;

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(
        8 / invertedFraction - 8,
        100,
      )}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      // Set the content dynamically, handling single string or array of strings
      const currentTextContent = texts[textIndexRef.current % texts.length];
      const nextTextContent = texts[(textIndexRef.current + 1) % texts.length];

      // Use innerHTML for line breaks
      current1.innerHTML = Array.isArray(currentTextContent)
        ? `${currentTextContent[0]}<br>${currentTextContent[1]}` // Assumes only two parts
        : currentTextContent;
      current2.innerHTML = Array.isArray(nextTextContent)
        ? `${nextTextContent[0]}<br>${nextTextContent[1]}` // Assumes only two parts
        : nextTextContent;
    },
    [texts],
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;
    }
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref, textIndexRef }; // Keep textIndexRef if needed
};

interface MorphingTextProps {
  className?: string;
  texts: TextItem[]; // This is the correct type definition for the prop
}

// Corrected 'Texts' component definition
const Texts: React.FC<MorphingTextProps> = ({ texts }) => { // Changed Pick<MorphingTextProps, TextItem[]> to MorphingTextProps
  const { text1Ref, text2Ref } = useMorphingText(texts); // Pass texts directly
  return (
    <>
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text1Ref}
      />
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text2Ref}
      />
    </>
  );
};

const SvgFilters: React.FC = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
}) => (
  <div
    className={cn(
      "relative mx-auto h-24 w-full text-center font-sans font-bold leading-none [filter:url(#threshold)_blur(0.6px)] md:h-32", // Removed max-w-screen-md here for better control below
      // Adjust font sizes for different screen sizes
      "text-[24pt] sm:text-[32pt] md:text-[40pt] lg:text-[6rem]", // More granular font sizes
      // Control max-width more carefully
      "max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl", // Adjust these max-widths based on testing
      className,
    )}
  >
    <Texts texts={texts} />
    <SvgFilters />
  </div>
);