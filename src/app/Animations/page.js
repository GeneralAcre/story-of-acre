'use client';
import { useEffect, useState, useMemo } from 'react';

// TypingText Component
const TypingText = () => {
  const messages = useMemo(() => [
    'NICE TO MEET YOU ALL',
    'はじめまして。よろしくおねがいします',
    '认识你很开心'
  ], []);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let timeoutId;

    if (!isDeleting && charIndex < currentMessage.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentMessage.length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, currentMessageIndex, messages]);

  return (
    <p className="text-center text-[24px] mt-[50px] min-h-[40px] text-[#d8ff4a]">
      {displayedText}
      <span className="border-r-2 border-white animate-pulse ml-1" />
    </p>
  );
};

// RandomAppearText Component
const RandomAppearText = ({ text, delay = 500, speed = 150, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let intervalId;
    const animateText = () => {
      const positions = Array.from({ length: text.length }, (_, i) => i);
      const shuffledPositions = [...positions].sort(() => Math.random() - 0.5);
      const visiblePositions = new Set();
      const currentText = Array(text.length).fill(' ');

      intervalId = setInterval(() => {
        if (visiblePositions.size < text.length) {
          const nextPosition = shuffledPositions[visiblePositions.size];
          visiblePositions.add(nextPosition);
          currentText[nextPosition] = text[nextPosition];
          setDisplayedText(currentText.join(''));
        } else {
          clearInterval(intervalId);
        }
      }, speed);
    };

    const timer = setTimeout(() => {
      animateText();
    }, delay);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
    };
  }, [text, delay, speed]);

  return <p className={className}>{displayedText}</p>;
};


const colors = ['#D61A69', '#d8ff4a'];
// AnimatedHeader Component
const AnimatedHeader = () => {
  const firstName = 'SANPAPHAT';
  const lastName = 'PORNTONGPRASERT';

  const [coloredLetters, setColoredLetters] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColoredLetters((prev) => {
        if (prev.length >= 5) return prev;

        const isFirst = Math.random() < 0.5;
        const name = isFirst ? firstName : lastName;
        const type = isFirst ? 'first' : 'last';
        const existing = new Set(prev.map((item) => item.type + item.index));
        const availableIndices = [];

        for (let i = 0; i < name.length; i++) {
          const key = type + i;
          if (!existing.has(key)) {
            availableIndices.push(i);
          }
        }

        if (availableIndices.length === 0) return prev;

        const index = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const newItem = { type, index, color };

        setTimeout(() => {
          setColoredLetters((curr) =>
            curr.filter((item) => !(item.type === type && item.index === index))
          );
        }, 1500);

        return [...prev, newItem];
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getColor = (type, index) => {
    const found = coloredLetters.find((item) => item.type === type && item.index === index);
    return found ? found.color : 'white';
  };

  return (
    <header className="fixed top-0 left-0 w-full z-20 text-[32px] sm:text-[45px] md:text-[100px] lg:text-[140px] leading-none tracking-wide font-bold flex flex-wrap mx-4">
    {firstName.split('').map((char, i) => (
      <span key={`first-${i}`} style={{ color: getColor('first', i), transition: 'color 0.6s ease' }}>
        {char}
      </span>
    ))}
    <span className="px-2" />
    {lastName.split('').map((char, i) => (
      <span key={`last-${i}`} style={{ color: getColor('last', i), transition: 'color 0.6s ease' }}>
        {char}
      </span>
    ))}
  </header>
  );
};

// Exports
export default TypingText;
export { RandomAppearText, AnimatedHeader };
