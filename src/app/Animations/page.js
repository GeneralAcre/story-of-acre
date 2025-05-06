'use client';
import { useEffect, useState} from 'react';

const TypingText = () => {
  const messages = ['NICE TO MEET YOU ALL','はじめまして。よろしくおねがいします','认识你很开心'];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];

    if (!isDeleting && charIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentMessage.length) {
      const pause = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Pause before deleting
      return () => clearTimeout(pause);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50); // Deleting speed
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {setIsDeleting(false);setCurrentMessageIndex((prev) => (prev + 1) % messages.length);}
  }, [charIndex, isDeleting, currentMessageIndex]);

  return (
    <p className="text-center text-[24px] mt-[50px] min-h-[40px] text-[#d8ff4a]">
      {displayedText}
      <span className="border-r-2 border-white animate-pulse ml-1" />
    </p>
  );
};


const RandomAppearText = ({ text, delay = 500, speed = 150, className = "" }) => {
    const [displayedText, setDisplayedText] = useState('');
    
    useEffect(() => {
      // Function to make letters appear randomly
      const animateText = () => {
        // Create array of letter positions
        const positions = Array.from({ length: text.length }, (_, i) => i);
        // Shuffle the positions for random appearance
        const shuffledPositions = [...positions].sort(() => Math.random() - 0.5);
        
        // Current visible letter positions
        let visiblePositions = new Set();
        let currentText = Array(text.length).fill(' ');
        
        // Reveal one letter at a time
        const intervalId = setInterval(() => {
          if (visiblePositions.size < text.length) {
            const nextPosition = shuffledPositions[visiblePositions.size];
            visiblePositions.add(nextPosition);
            
            // Update the text with visible letters
            currentText[nextPosition] = text[nextPosition];
            setDisplayedText(currentText.join(''));
          } else {
            clearInterval(intervalId);
          }
        }, speed); // Speed of letter appearance
        
        return () => clearInterval(intervalId);
      };
      
      // Start animation after the specified delay
      const timer = setTimeout(() => {
        animateText();
      }, delay);
      
      return () => clearTimeout(timer);
    }, [text, delay, speed]);
    
    return (
      <p className={className}>
        {displayedText}
      </p>
    );
  };

  const AnimatedHeader = () => {
    const firstName = 'SANPAPHAT';
    const lastName = 'PORNTONGPRASERT';
    const colors = ['#D61A69', '#d8ff4a'];
  
    // Store colored letters with type, index, and color
    const [coloredLetters, setColoredLetters] = useState([]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setColoredLetters((prev) => {
          // If 5 letters are already colored, skip
          if (prev.length >= 5) return prev;
  
          // Randomly choose name part
          const isFirst = Math.random() < 0.5;
          const name = isFirst ? firstName : lastName;
          const existingIndices = new Set(prev.map((item) => item.type + item.index));
          
          // Find available indices
          const availableIndices = [];
          for (let i = 0; i < name.length; i++) {
            const key = (isFirst ? 'first' : 'last') + i;
            if (!existingIndices.has(key)) {
              availableIndices.push(i);
            }
          }
  
          if (availableIndices.length === 0) return prev;
  
          // Pick one new index and color
          const index = availableIndices[Math.floor(Math.random() * availableIndices.length)];
          const color = colors[Math.floor(Math.random() * colors.length)];
  
          const newItem = { type: isFirst ? 'first' : 'last', index, color };
  
          // Set timeout to remove it later
          setTimeout(() => {
            setColoredLetters((curr) =>
              curr.filter((item) => !(item.type === newItem.type && item.index === newItem.index))
            );
          }, 1500); // Revert after 1.5s
  
          return [...prev, newItem];
        });
      }, 500); // Try every 500ms to add a new one
  
      return () => clearInterval(interval);
    }, []);
  
    // Get color map for rendering
    const getColor = (type, index) => {
      const found = coloredLetters.find((item) => item.type === type && item.index === index);
      return found ? found.color : 'white';
    };
  
    return (
      <header className="fixed top-0 left-0 z-20 text-[45px] sm:text-[60px] md:text-[100px] lg:text-[140px] leading-none 
      tracking-wide font-bold flex flex-wrap ">{/* First Name */}
        {firstName.split('').map((char, i) => (
          <span
            key={`first-${i}`}
            style={{
              color: getColor('first', i),
              transition: 'color 0.6s ease',
            }}
          >
            {char}
          </span>
        ))}
        <span className="px-2">{/* Space */}</span>
        {/* Last Name */}
        {lastName.split('').map((char, i) => (
          <span
            key={`last-${i}`}
            style={{
              color: getColor('last', i),
              transition: 'color 0.6s ease',
            }}
          >
            {char}
          </span>
        ))}
      </header>
    );
  };

export default TypingText;
export {RandomAppearText,AnimatedHeader};
