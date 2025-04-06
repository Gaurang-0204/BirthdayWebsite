import React, { useState, useEffect } from 'react';

const MemoryBook = () => {
  // Sample memories data
  const memories = [
    { type: 'photo', src: "/FirstTime i  saw you.jpg", caption: 'First Impression ', date: '' },
    { type: 'photo', src: '/Our Graduation.jpg', caption: 'Graduation day', date: '2/2/2025' },
    { type: 'photo', src: '/Ghibli.png', caption: "The more time I spent with you, the more I realized — you weren’t just special, you were rare.", date: '2/2/2025' },
    { type: 'photo', src: '/Selfie .jpg', caption: "Just look at those eyes, those lips, that hair — everything… and realize what a rare masterpiece you truly are", date: 'September 10, 2023' },
    { type: 'photo', src: '/GlassesSelfie.jpg', caption: 'I mess up a lot — God knows that — but becoming your friend was the one thing I got absolutely right.', date: 'October 20, 2023' },
    { type: 'photo', src: '/Flower.jpg', caption: "Well, in the end, I’d just like to say it once more — a very happy birthday to my princess. You deserve all the happiness in the world.", date: 'October 20, 2023' }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [direction, setDirection] = useState(null);
  const [pageRotation, setPageRotation] = useState(0);

  const openBook = () => {
    if (!isOpen && !isOpening) {
      setIsOpening(true);
      setTimeout(() => {
        setIsOpen(true);
        setIsOpening(false);
      }, 1000);
    }
  };

  const closeBook = () => {
    if (isOpen && !isClosing) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
        setCurrentPage(0); // Reset to first page when closing
      }, 1000);
    }
  };

  const nextPage = () => {
    if (currentPage < memories.length - 1 && !flipping && isOpen) {
      setDirection('right');
      setFlipping(true);
      setPageRotation(0);
      
      const flipAnimation = setInterval(() => {
        setPageRotation(prev => {
          if (prev >= 180) {
            clearInterval(flipAnimation);
            return 180;
          }
          return prev + 10;
        });
      }, 20);
      
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setFlipping(false);
        setPageRotation(0);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !flipping && isOpen) {
      setDirection('left');
      setFlipping(true);
      setPageRotation(180);
      
      const flipAnimation = setInterval(() => {
        setPageRotation(prev => {
          if (prev <= 0) {
            clearInterval(flipAnimation);
            return 0;
          }
          return prev - 10;
        });
      }, 20);
      
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setFlipping(false);
        setPageRotation(0);
      }, 600);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen) {
        if (e.key === 'ArrowRight') nextPage();
        else if (e.key === 'ArrowLeft') prevPage();
        else if (e.key === 'Escape') closeBook();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage, flipping]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <h1 className="text-4xl font-serif mb-8 text-amber-900 italic">Our Treasured Memories</h1>
      
      {!isOpen ? (
        // Closed book
        <div 
          className={`relative w-96 h-128 bg-gradient-to-r from-amber-800 to-amber-700 rounded-md cursor-pointer shadow-xl 
                     transform transition-all duration-1000 ${isOpening ? 'rotate-y-90' : 'hover:scale-105'}`}
          onClick={openBook}
          style={{
            transformStyle: 'preserve-3d',
            transform: isOpening ? 'rotateY(90deg)' : '',
            height: '512px' // Increased height
          }}
        >
          {/* Book cover details */}
          <div className="absolute inset-0 rounded-md overflow-hidden">
            {/* Leather texture pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-black" 
                   style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'}}></div>
            </div>
            
            {/* Decorative frame */}
            <div className="absolute inset-8 border-2 border-amber-200 rounded opacity-70"></div>
            
            {/* Title area */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <h2 className="text-4xl font-serif text-amber-100 mb-6">Memories</h2>
                <p className="text-xl text-amber-200 italic mb-8">Our Journey Together</p>
                <div className="mt-8 p-3 bg-amber-900 bg-opacity-30 rounded-md">
                  <p className="text-amber-100">Click to Open</p>
                </div>
              </div>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-200 opacity-70"></div>
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-200 opacity-70"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-200 opacity-70"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-200 opacity-70"></div>
          </div>
          
          {/* Book spine */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-amber-900 rounded-l-md"></div>
          
          {/* Book shadows */}
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-black opacity-20 rounded-r-md"></div>
          <div className="absolute inset-y-0 right-0 w-full h-full shadow-lg"></div>
        </div>
      ) : (
        // Open book
        <div className="relative w-full max-w-6xl h-128 transition-all duration-1000"
             style={{ 
               height: '512px', // Increased height
               transform: isClosing ? 'rotateY(90deg)' : '',
               transformStyle: 'preserve-3d',
               transition: 'transform 1s ease'
             }}>
          {/* Book container */}
          <div className="relative w-full h-full flex justify-center perspective-1000">
            {/* Book background and shadow */}
            <div className="absolute inset-0 bg-amber-800 rounded-md shadow-2xl transform -translate-y-4 scale-105 z-0"></div>
            
            {/* Book pages background */}
            <div className="absolute inset-4 bg-amber-100 rounded z-0"></div>
            
            {/* Book spine */}
            <div className="absolute h-full w-8 bg-gradient-to-r from-amber-900 to-amber-800 rounded-l z-10">
              <div className="h-full w-1 bg-amber-700 absolute right-0"></div>
            </div>
            
            {/* Paper texture overlay */}
            <div className="absolute inset-0 bg-amber-50 opacity-5 z-10 pointer-events-none"
                 style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'}}></div>
            
            {/* Left page */}
            <div className="absolute left-8 w-1/2 h-full bg-gradient-to-r from-amber-50 to-amber-100 shadow-md flex items-center justify-center p-8 z-20 transform-gpu">
              {currentPage > 0 ? (
                <div className={`w-full h-full flex flex-col items-center transition-all duration-500 ${flipping && direction === 'left' ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="relative w-full h-80 bg-white p-3 shadow-md mb-6 rotate-1">
                    <div className="absolute inset-0 bg-black opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.02) 10px, rgba(0,0,0,0.02) 20px)'}}></div>
                    <img 
                      src={memories[currentPage - 1].src} 
                      alt="Memory" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                    <div className="absolute -top-1 -left-1 w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                  </div>
                  <p className="text-center text-xl text-amber-900 font-serif italic">
                    {memories[currentPage - 1].caption}
                  </p>
                  <p className="text-sm text-amber-700 mt-2">{memories[currentPage - 1].date}</p>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8">
                  <h2 className="text-3xl text-amber-900 font-serif italic mb-6">Our Story</h2>
                  <p className="text-lg text-amber-800 text-center leading-relaxed">
                  The first time I saw you, it wasn’t some dramatic movie moment — no slow music or magical lighting — but somehow, it still feels unforgettable.
                  The way you talked to people, genuinely listened, made jokes that caught everyone off guard — it made me feel like you brought something special with you. From that day, it was clear you were not  just another person in the group.
                  You were the only person And even now, when I look back at that photo, I remember exactly how I felt seeing you for the first time
                  </p>
                </div>
              )}
            </div>
            
            {/* Flipping page effect */}
            {flipping && (
              <div 
                className="absolute top-0 bottom-0 w-1/2 bg-amber-50 z-30 shadow-xl"
                style={{
                  left: direction === 'right' ? '50%' : '8px',
                  right: direction === 'left' ? '50%' : '0',
                  transformOrigin: direction === 'right' ? 'left' : 'right',
                  transform: `rotateY(${pageRotation}deg)`,
                  backfaceVisibility: 'hidden',
                  transition: 'transform 0.6s ease'
                }}
              >
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
                  {direction === 'right' ? (
                    <>
                      <div className="relative w-full h-80 bg-white p-3 shadow-md mb-6 -rotate-1">
                        <img 
                          src={memories[currentPage].src} 
                          alt="Memory" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center text-xl text-amber-900 font-serif italic">
                        {memories[currentPage].caption}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="relative w-full h-80 bg-white p-3 shadow-md mb-6 rotate-1">
                        <img 
                          src={memories[currentPage - 1].src} 
                          alt="Memory" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center text-xl text-amber-900 font-serif italic">
                        {memories[currentPage - 1].caption}
                      </p>
                    </>
                  )}
                </div>
                
                {/* Page edge */}
                <div className={`absolute top-0 bottom-0 w-1 bg-amber-200 ${direction === 'right' ? 'left-0' : 'right-0'}`}></div>
              </div>
            )}
            
            {/* Right page */}
            <div className="absolute right-0 w-1/2 h-full bg-gradient-to-l from-amber-50 to-amber-100 shadow-md flex items-center justify-center p-8 z-20">
              <div className={`w-full h-full flex flex-col items-center transition-all duration-500 ${flipping && direction === 'right' ? 'opacity-0' : 'opacity-100'}`}>
                <div className="relative w-full h-80 bg-white p-3 shadow-md mb-6 -rotate-1">
                  <div className="absolute inset-0 bg-black opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.02) 10px, rgba(0,0,0,0.02) 20px)'}}></div>
                  <img 
                    src={memories[currentPage].src} 
                    alt="Memory" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <p className="text-center text-xl text-amber-900 font-serif italic">
                  {memories[currentPage].caption}
                </p>
                <p className="text-sm text-amber-700 mt-2">{memories[currentPage].date}</p>
              </div>
            </div>
            
            {/* Page numbers */}
            <div className="absolute bottom-4 left-32 text-sm text-amber-800 font-serif italic z-30">
              {currentPage > 0 ? currentPage * 2 - 1 : ''}
            </div>
            <div className="absolute bottom-4 right-32 text-sm text-amber-800 font-serif italic z-30">
              {currentPage * 2}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-between px-8 py-4">
            <button 
              onClick={prevPage} 
              className={`px-6 py-2 rounded-full bg-gradient-to-r from-amber-800 to-amber-700 text-amber-100 shadow-md transition-all ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:from-amber-700 hover:to-amber-600'}`}
              disabled={currentPage === 0}
            >
              ← Previous
            </button>
            
            {/* Close book button */}
            <button 
              onClick={closeBook} 
              className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-amber-100 shadow-md hover:from-amber-500 hover:to-amber-600 transition-all"
            >
              Close Book
            </button>
            
            <div className="px-4 py-2 bg-amber-50 rounded-full shadow text-amber-900 font-serif">
              {currentPage + 1} of {memories.length}
            </div>
            <button 
              onClick={nextPage} 
              className={`px-6 py-2 rounded-full bg-gradient-to-r from-amber-700 to-amber-800 text-amber-100 shadow-md transition-all ${currentPage === memories.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:from-amber-600 hover:to-amber-700'}`}
              disabled={currentPage === memories.length - 1}
            >
              Next →
            </button>
          </div>
          
          {/* Instruction text */}
          <div className="absolute -bottom-28 left-0 right-0 text-center text-amber-800 text-sm italic">
            Use arrow keys ← → or buttons to turn pages • Press ESC to close book
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryBook;