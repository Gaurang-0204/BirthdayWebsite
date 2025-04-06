import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles, Gift, Cake, CloudRain, Music, PartyPopper, Crown } from 'lucide-react';

const WelcomePage = () => {
  const [countdown, setCountdown] = useState(5);
  const [showSparkles, setShowSparkles] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [showRainbow, setShowRainbow] = useState(false);
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    // Start countdown
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to birthday page
          setTimeout(() => {
            window.location.href = "/birthday";
          }, 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Show sparkles after a short delay
    setTimeout(() => setShowSparkles(true), 500);
    
    // Show rainbow after a delay
    setTimeout(() => setShowRainbow(true), 800);

    // Create floating elements
    const colors = [
      'text-pink-300', 'text-pink-400', 'text-rose-300', 
      'text-purple-300', 'text-fuchsia-300', 'text-red-300', 
      'text-orange-300', 'text-yellow-300'
    ];
    
    const elements = [
      { component: Heart, proportion: 0.4 },
      { component: Star, proportion: 0.2 },
      { component: Gift, proportion: 0.1 },
      { component: Cake, proportion: 0.1 },
      { component: Music, proportion: 0.1 },
      { component: PartyPopper, proportion: 0.1 }
    ];
    
    const totalElements = window.innerWidth < 768 ? 15 : 25;
    
    const newFloatingElements = [];
    
    for (let i = 0; i < totalElements; i++) {
      // Random selection based on proportion
      const random = Math.random();
      let selectedComponent;
      let cumulativeProportion = 0;
      
      for (const el of elements) {
        cumulativeProportion += el.proportion;
        if (random <= cumulativeProportion) {
          selectedComponent = el.component;
          break;
        }
      }
      
      newFloatingElements.push({
        id: i,
        component: selectedComponent,
        color: colors[Math.floor(Math.random() * colors.length)],
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 80}%`,
        size: window.innerWidth < 768 ? 
          (14 + Math.floor(Math.random() * 8)) : 
          (16 + Math.floor(Math.random() * 12)),
        animationDuration: `${5 + Math.random() * 7}s`,
        animationDelay: `${Math.random() * 2}s`,
        rotate: Math.random() * 40 - 20
      });
    }
    
    setFloatingElements(newFloatingElements);
    
    // Create balloons
    const balloonColors = [
      'bg-pink-400', 'bg-purple-400', 'bg-fuchsia-400',
      'bg-red-400', 'bg-blue-400', 'bg-green-400',
      'bg-yellow-400', 'bg-orange-400'
    ];
    
    const newBalloons = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      color: balloonColors[i % balloonColors.length],
      left: 10 + (i * 10) + (Math.random() * 5),
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4
    }));
    
    setBalloons(newBalloons);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-fuchsia-100 flex items-center justify-center overflow-hidden">
      {/* Rainbow arc */}
      {showRainbow && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full flex items-center justify-center">
            {['bg-red-400', 'bg-orange-300', 'bg-yellow-300', 'bg-green-300', 'bg-blue-300', 'bg-indigo-300', 'bg-purple-300'].map((color, i) => (
              <div 
                key={`rainbow-${i}`} 
                className={`absolute ${color} opacity-70`}
                style={{
                  width: `${70 + (i * 5)}%`,
                  height: `${70 + (i * 5)}%`,
                  borderRadius: '50%',
                  border: `${12 - i}px solid`,
                  borderColor: 'transparent transparent currentColor currentColor',
                  transform: 'rotate(45deg) translateY(20%)',
                  animation: 'fadeIn 1.5s forwards',
                  animationDelay: `${0.1 * i}s`
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Balloons */}
      {balloons.map((balloon) => (
        <div 
          key={`balloon-${balloon.id}`}
          className="absolute bottom-0 animate-balloon-float"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`
          }}
        >
          <div className={`${balloon.color} w-12 h-16 rounded-t-full mb-1`}></div>
          <div className="w-px h-16 bg-gray-400 mx-auto"></div>
        </div>
      ))}
      
      {/* Background floating elements */}
      {floatingElements.map((element) => {
        const IconComponent = element.component;
        return (
          <div 
            key={element.id}
            className={`absolute ${element.color} animate-float`}
            style={{
              left: element.left,
              top: element.top,
              animationDuration: element.animationDuration,
              animationDelay: element.animationDelay,
              transform: `rotate(${element.rotate}deg)`
            }}
          >
            <IconComponent size={element.size} fill="currentColor" />
          </div>
        );
      })}
      
      {/* Cloud with raindrops */}
      <div className="absolute top-10 right-10 text-blue-200">
        <CloudRain size={48} />
        <div className="absolute top-8 left-6 w-1 h-6 rounded-full bg-blue-300 animate-raindrop" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-8 left-12 w-1 h-6 rounded-full bg-blue-300 animate-raindrop" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-8 left-18 w-1 h-6 rounded-full bg-blue-300 animate-raindrop" style={{ animationDelay: '0.1s' }}></div>
      </div>
      
      {/* Central card with cute welcome message */}
      <div className="relative z-10 bg-white bg-opacity-90 rounded-3xl shadow-xl p-6 md:p-8 max-w-sm md:max-w-md text-center transform transition-all duration-500 hover:scale-105 border-4 border-pink-300">
        {/* Crown at the top */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <Crown size={32} className="text-yellow-400" fill="currentColor" />
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute -top-4 -left-4">
          <div className="w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center shadow-md">
            <Heart size={16} fill="white" color="white" />
          </div>
        </div>
        <div className="absolute -top-4 -right-4">
          <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center shadow-md">
            <Star size={16} fill="white" color="white" />
          </div>
        </div>
        <div className="absolute -bottom-4 -left-4">
          <div className="w-10 h-10 bg-fuchsia-300 rounded-full flex items-center justify-center shadow-md">
            <Gift size={16} fill="white" color="white" />
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4">
          <div className="w-10 h-10 bg-rose-300 rounded-full flex items-center justify-center shadow-md">
            <Cake size={16} fill="white" color="white" />
          </div>
        </div>
        
        {/* Cute animal illustration - simplified kitty face */}
        <div className="relative w-24 h-24 mx-auto mb-2">
          <div className="w-24 h-24 bg-pink-200 rounded-full relative">
            {/* Ears */}
            <div className="absolute -top-3 -left-1 w-8 h-8 bg-pink-200 rounded-full transform rotate-45"></div>
            <div className="absolute -top-3 -right-1 w-8 h-8 bg-pink-200 rounded-full transform -rotate-45"></div>
            
            {/* Inner ears */}
            <div className="absolute -top-2 left-3 w-4 h-4 bg-pink-300 rounded-full transform rotate-45"></div>
            <div className="absolute -top-2 right-3 w-4 h-4 bg-pink-300 rounded-full transform -rotate-45"></div>
            
            {/* Eyes */}
            <div className="absolute top-6 left-5 w-3 h-6 bg-black rounded-full"></div>
            <div className="absolute top-6 right-5 w-3 h-6 bg-black rounded-full"></div>
            
            {/* Blush */}
            <div className="absolute top-12 left-3 w-5 h-3 bg-pink-300 rounded-full opacity-60"></div>
            <div className="absolute top-12 right-3 w-5 h-3 bg-pink-300 rounded-full opacity-60"></div>
            
            {/* Nose */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-pink-400 rounded-full"></div>
            
            {/* Mouth */}
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-6 h-2 flex justify-between">
              <div className="w-2 h-2 border-b-2 border-black rounded-full transform rotate-12"></div>
              <div className="w-2 h-2 border-b-2 border-black rounded-full transform -rotate-12"></div>
            </div>
            
            {/* Whiskers */}
            <div className="absolute top-11 left-1 w-4 h-px bg-gray-400"></div>
            <div className="absolute top-13 left-0 w-5 h-px bg-gray-400"></div>
            <div className="absolute top-11 right-1 w-4 h-px bg-gray-400"></div>
            <div className="absolute top-13 right-0 w-5 h-px bg-gray-400"></div>
          </div>
        </div>
        
        {/* Ribbon border */}
        <div className="absolute top-1/4 -left-3 w-6 h-24 bg-pink-300 rounded-md transform -rotate-45 z-0"></div>
        <div className="absolute top-1/4 -right-3 w-6 h-24 bg-pink-300 rounded-md transform rotate-45 z-0"></div>
        
        {/* Sparkles animation */}
        {showSparkles && (
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <Sparkles 
                key={i}
                className="absolute text-yellow-300 animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
                size={8 + Math.random() * 6}
              />
            ))}
          </div>
        )}
        
        {/* Main content */}
        <div className="pt-2 pb-2 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 text-transparent bg-clip-text" style={{ fontFamily: 'cursive' }}>
            Welcome!
          </h1>
          
          <div className="relative mb-6">
            <div className="absolute -top-1 -left-2">
              <Star className="text-yellow-400" size={18} fill="currentColor" />
            </div>
            <p className="text-xl text-pink-500 mb-3" style={{ fontFamily: 'cursive' }}>
              A super special surprise awaits you...
            </p>
            <div className="absolute -bottom-1 -right-2">
              <Star className="text-yellow-400" size={18} fill="currentColor" />
            </div>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200 shadow-inner mb-6">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Heart className="text-pink-400" size={18} fill="currentColor" />
              <p className="text-purple-600 font-medium" style={{ fontFamily: 'cursive' }}>
                Magic starts in...
              </p>
              <Heart className="text-pink-400" size={18} fill="currentColor" />
            </div>
            <div className="text-4xl font-bold text-fuchsia-500 animate-pulse">
              {countdown}
            </div>
          </div>
          
          {/* Bouncing hearts */}
          <div className="flex justify-center gap-3 my-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="text-pink-400" style={{ 
                animation: 'bounce 1s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`,
                transformOrigin: 'bottom'
              }}>
                <Heart size={16} fill="currentColor" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(var(--rotation, 0deg)); }
          25% { transform: translate(10px, -15px) rotate(calc(var(--rotation, 0deg) + 5deg)); }
          50% { transform: translate(0, -25px) rotate(var(--rotation, 0deg)); }
          75% { transform: translate(-10px, -15px) rotate(calc(var(--rotation, 0deg) - 5deg)); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(0.5); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.7; }
        }
        
        @keyframes balloon-float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(5deg); }
        }
        
        @keyframes raindrop {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(30px); opacity: 0; }
        }
        
        .animate-float {
          animation: float 7s ease-in-out infinite;
          --rotation: 0deg;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-balloon-float {
          animation: balloon-float linear infinite;
        }
        
        .animate-raindrop {
          animation: raindrop 1.5s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;