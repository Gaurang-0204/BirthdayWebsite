// import React, { useState, useEffect } from 'react';
// import { Heart, Star } from 'lucide-react';

// const BirthdayPage = () => {
//     const [showConfetti, setShowConfetti] = useState(false);
//   const [name, setName] = useState('Princess');
//   const [hearts, setHearts] = useState([]);


//   useEffect(() => {
//     // Create floating hearts
//     const colors = ['text-pink-300', 'text-pink-400', 'text-rose-300', 'text-purple-300', 'text-fuchsia-300'];
//     const newHearts = Array.from({ length: 15 }, (_, i) => ({
//       id: i,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       left: `${Math.random() * 90}%`,
//       size: 16 + Math.floor(Math.random() * 12),
//       delay: `${Math.random() * 5}s`
//     }));
//     setHearts(newHearts);
    
//     // Auto-trigger confetti
//     setTimeout(() => setShowConfetti(true), 1000);
//   }, []);
  
//   const handleButtonClick = () => {
//     setShowConfetti(true);
//   };
//   return (
//     <div>
//         <div className="relative min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
//       {/* Floating hearts */}
//       {hearts.map((heart) => (
//         <div 
//           key={heart.id}
//           className={`absolute ${heart.color} animate-float`}
//           style={{
//             left: heart.left,
//             bottom: '-20px', 
//             animationDelay: heart.delay,
//             animationDuration: `${7 + Math.random() * 5}s`
//           }}
//         >
//           <Heart size={heart.size} fill="currentColor" />
//         </div>
//       ))}
      
//       {/* Sparkles effect */}
//       {showConfetti && (
//         <div className="absolute inset-0">
//           {Array.from({ length: 50 }).map((_, i) => (
//             <div 
//               key={i}
//               className="absolute animate-twinkle"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 animationDuration: `${2 + Math.random() * 3}s`
//               }}
//             >
//               <Star size={10 + Math.random() * 10} fill="#FFDF00" color="#FFDF00" />
//             </div>
//           ))}
//         </div>
//       )}
      
//       {/* Birthday card - increased height */}
//       <div className="relative bg-white rounded-3xl shadow-xl p-8 max-w-3xl w-full z-10 border-4 border-pink-200">
//         {/* Decorative elements */}
//         <div className="absolute -top-6 -left-6">
//           <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center">
//             <Heart size={20} fill="white" color="white" />
//           </div>
//         </div>
//         <div className="absolute -top-6 -right-6">
//           <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center">
//             <Star size={20} fill="white" color="white" />
//           </div>
//         </div>
        
//         {/* Ribbon */}
//         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//           <div className="w-40 h-6 bg-pink-400 rounded-md"></div>
//         </div>
        
//         <div className="mt-6">
//           {/* Title with cute font and gradient */}
//           <div className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 text-transparent bg-clip-text" style={{ fontFamily: 'cursive' }}>
//             Happy Birthday!
//           </div>
          
//           <div className="mb-6">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter name"
//               className="border-2 border-pink-200 rounded-full px-4 py-2 text-center max-w-xs focus:outline-none focus:border-pink-400 transition-colors"
//             />
//           </div>
          
//           <div className="text-2xl font-medium text-pink-500 mb-4" style={{ fontFamily: 'cursive' }}>
//             Dearest {name},
//           </div>
          
//           <p className="text-purple-700 mb-6">
//             Wishing you the most magical, sparkly, and fabulous birthday ever! May your day be filled with glitter, cupcakes, and everything sweet!
//           </p>
          
//           {/* Cake and button with increased spacing */}
//           <div className="flex flex-wrap items-center justify-center mt-10 mb-8 gap-16">
//             {/* Cake illustration with properly aligned candles - increased height */}
//             <div className="relative h-64 w-48">
//               {/* Cake base */}
//               <div className="w-48 h-20 bg-pink-200 rounded-xl absolute bottom-0"></div>
//               <div className="w-40 h-16 bg-pink-300 rounded-xl absolute bottom-16 left-4"></div>
//               <div className="w-32 h-14 bg-pink-400 rounded-xl absolute bottom-28 left-8"></div>
              
//               {/* Candles - pushed higher */}
//               <div className="absolute bottom-48 left-16 w-2 h-10 bg-purple-300"></div>
//                             <div className="absolute bottom-58 left-16 w-4 h-6 bg-yellow-400 rounded-full animate-flicker"></div>
                            
//                             <div className="absolute bottom-48 left-24 w-2 h-10 bg-pink-300"></div>
//                             <div className="absolute bottom-58 left-24 w-4 h-6 bg-yellow-400 rounded-full animate-flicker" style={{ animationDelay: '0.5s' }}></div>
                            
//                             <div className="absolute bottom-48 left-32 w-2 h-10 bg-fuchsia-300"></div>
//                             <div className="absolute bottom-58 left-32 w-4 h-6 bg-yellow-400 rounded-full animate-flicker" style={{ animationDelay: '0.8s' }}></div>
//               {/* Decorations */}
//               <div className="absolute bottom-12 left-10 w-4 h-4 bg-white rounded-full"></div>
//               <div className="absolute bottom-16 left-20 w-4 h-4 bg-white rounded-full"></div>
//               <div className="absolute bottom-18 left-30 w-4 h-4 bg-white rounded-full"></div>
//               <div className="absolute bottom-30 left-16 w-4 h-4 bg-white rounded-full"></div>
//               <div className="absolute bottom-26 left-26 w-4 h-4 bg-white rounded-full"></div>
//             </div>
            
//             {/* Button beside the cake */}
//             <div className="flex flex-col items-center justify-center">
//               <div className="text-lg text-pink-500 mb-4">
//                 Time to celebrate!
//               </div>
//               <button
//                 onClick={handleButtonClick}
//                 className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
//                 style={{ fontFamily: 'cursive' }}
//               >
//                 <Heart className="mr-2" size={20} fill="white" />
//                 Make a Wish!
//               </button>
//               <div className="flex mt-4 space-x-2">
//                 {[...Array(5)].map((_, i) => (
//                   <div key={i} className="text-pink-300 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
//                     <Heart size={14} fill="currentColor" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-100px) rotate(5deg); }
//         }
        
//         @keyframes twinkle {
//           0% { opacity: 0; transform: scale(0.5); }
//           50% { opacity: 1; transform: scale(1.2); }
//           100% { opacity: 0; transform: scale(0.5); }
//         }
        
//         @keyframes flicker {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.6; transform: scale(0.8); }
//         }
        
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-5px); }
//         }
        
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
        
//         .animate-twinkle {
//           animation: twinkle 3s ease-in-out infinite;
//         }
        
//         .animate-flicker {
//           animation: flicker 0.6s ease-in-out infinite;
//         }
        
//         .animate-bounce {
//           animation: bounce 1s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//     </div>
//   )
// }

// export default BirthdayPage


// import React, { useState, useEffect } from 'react';
// import { Heart, Star } from 'lucide-react';

// const BirthdayPage = () => {
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [name, setName] = useState('Princess');
//   const [hearts, setHearts] = useState([]);

//   useEffect(() => {
//     // Create floating hearts
//     const colors = ['text-pink-300', 'text-pink-400', 'text-rose-300', 'text-purple-300', 'text-fuchsia-300'];
//     const newHearts = Array.from({ length: 15 }, (_, i) => ({
//       id: i,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       left: `${Math.random() * 90}%`,
//       size: 16 + Math.floor(Math.random() * 12),
//       delay: `${Math.random() * 5}s`
//     }));
//     setHearts(newHearts);
    
//     // Auto-trigger confetti
//     setTimeout(() => setShowConfetti(true), 1000);
//   }, []);
  
//   const handleButtonClick = () => {
//     setShowConfetti(true);
//   };

//   return (
//     <div>
//       <div className="relative min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
//         {/* Floating hearts */}
//         {hearts.map((heart) => (
//           <div 
//             key={heart.id}
//             className={`absolute ${heart.color}`}
//             style={{
//               left: heart.left,
//               bottom: '-20px', 
//               animationDelay: heart.delay,
//               animationDuration: `${7 + Math.random() * 5}s`,
//               animation: 'float 8s ease-in-out infinite'
//             }}
//           >
//             <Heart size={heart.size} fill="currentColor" />
//           </div>
//         ))}
        
//         {/* Sparkles effect */}
//         {showConfetti && (
//           <div className="absolute inset-0">
//             {Array.from({ length: 50 }).map((_, i) => (
//               <div 
//                 key={i}
//                 className="absolute"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   animationDelay: `${Math.random() * 3}s`,
//                   animationDuration: `${2 + Math.random() * 3}s`,
//                   animation: 'twinkle 3s ease-in-out infinite'
//                 }}
//               >
//                 <Star size={10 + Math.random() * 10} fill="#FFDF00" color="#FFDF00" />
//               </div>
//             ))}
//           </div>
//         )}
        
//         {/* Birthday card - increased height */}
//         <div className="relative bg-white rounded-3xl shadow-xl p-8 max-w-3xl w-full z-10 border-4 border-pink-200">
//           {/* Decorative elements */}
//           <div className="absolute -top-6 -left-6">
//             <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center">
//               <Heart size={20} fill="white" color="white" />
//             </div>
//           </div>
//           <div className="absolute -top-6 -right-6">
//             <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center">
//               <Star size={20} fill="white" color="white" />
//             </div>
//           </div>
          
//           {/* Ribbon */}
//           <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//             <div className="w-40 h-6 bg-pink-400 rounded-md"></div>
//           </div>
          
//           <div className="mt-6">
//             {/* Title with cute font and gradient */}
//             <div className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 text-transparent bg-clip-text" style={{ fontFamily: 'cursive' }}>
//               Happy Birthday!
//             </div>
            
//             <div className="mb-6">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter name"
//                 className="border-2 border-pink-200 rounded-full px-4 py-2 text-center max-w-xs focus:outline-none focus:border-pink-400 transition-colors"
//               />
//             </div>
            
//             <div className="text-2xl font-medium text-pink-500 mb-4" style={{ fontFamily: 'cursive' }}>
//               Dearest {name},
//             </div>
            
//             <p className="text-purple-700 mb-6">
//               Wishing you the most magical, sparkly, and fabulous birthday ever! May your day be filled with glitter, cupcakes, and everything sweet!
//             </p>
            
//             {/* Cake and button with increased spacing */}
//             <div className="flex flex-wrap items-center justify-center mt-10 mb-8 gap-16">
//               {/* Cake illustration with properly aligned candles - increased height */}
//               <div className="relative h-64 w-48">
//                 {/* Cake base */}
//                 <div className="w-48 h-20 bg-pink-200 rounded-xl absolute bottom-0"></div>
//                 <div className="w-40 h-16 bg-pink-300 rounded-xl absolute bottom-16 left-4"></div>
//                 <div className="w-32 h-14 bg-pink-400 rounded-xl absolute bottom-28 left-8"></div>
                
//                 {/* Candles - fixed positioning */}
//                 <div className="absolute bottom-40 left-16 w-2 h-10 bg-purple-300"></div>
//                 <div className="absolute bottom-48 left-16 w-4 h-6 bg-yellow-400 rounded-full" style={{ animation: 'flicker 0.6s ease-in-out infinite' }}></div>
                
//                 <div className="absolute bottom-40 left-24 w-2 h-10 bg-pink-300"></div>
//                 <div className="absolute bottom-48 left-24 w-4 h-6 bg-yellow-400 rounded-full" style={{ animation: 'flicker 0.6s ease-in-out infinite', animationDelay: '0.5s' }}></div>
                
//                 <div className="absolute bottom-40 left-32 w-2 h-10 bg-fuchsia-300"></div>
//                 <div className="absolute bottom-48 left-32 w-4 h-6 bg-yellow-400 rounded-full" style={{ animation: 'flicker 0.6s ease-in-out infinite', animationDelay: '0.8s' }}></div>
                
//                 {/* Decorations */}
//                 <div className="absolute bottom-12 left-10 w-4 h-4 bg-white rounded-full"></div>
//                 <div className="absolute bottom-16 left-20 w-4 h-4 bg-white rounded-full"></div>
//                 <div className="absolute bottom-18 left-30 w-4 h-4 bg-white rounded-full"></div>
//                 <div className="absolute bottom-30 left-16 w-4 h-4 bg-white rounded-full"></div>
//                 <div className="absolute bottom-26 left-26 w-4 h-4 bg-white rounded-full"></div>
//               </div>
              
//               {/* Button beside the cake */}
//               <div className="flex flex-col items-center justify-center">
//                 <div className="text-lg text-pink-500 mb-4">
//                   Time to celebrate!
//                 </div>
//                 <button
//                   onClick={handleButtonClick}
//                   className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
//                   style={{ fontFamily: 'cursive' }}
//                 >
//                   <Heart className="mr-2" size={20} fill="white" />
//                   Make a Wish!
//                 </button>
//                 <div className="flex mt-4 space-x-2">
//                   {[...Array(5)].map((_, i) => (
//                     <div key={i} className="text-pink-300" style={{ 
//                       animation: 'bounce 1s ease-in-out infinite',
//                       animationDelay: `${i * 0.1}s` 
//                     }}>
//                       <Heart size={14} fill="currentColor" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <style jsx>{`
//           @keyframes float {
//             0%, 100% { transform: translateY(0) rotate(0deg); }
//             50% { transform: translateY(-100px) rotate(5deg); }
//           }
          
//           @keyframes twinkle {
//             0% { opacity: 0; transform: scale(0.5); }
//             50% { opacity: 1; transform: scale(1.2); }
//             100% { opacity: 0; transform: scale(0.5); }
//           }
          
//           @keyframes flicker {
//             0%, 100% { opacity: 1; transform: scale(1); }
//             50% { opacity: 0.6; transform: scale(0.8); }
//           }
          
//           @keyframes bounce {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-5px); }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default BirthdayPage;




// import React, { useState, useEffect } from 'react';
// import { Heart, Star } from 'lucide-react';

// const BirthdayPage = () => {
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [showFireworks, setShowFireworks] = useState(false);
//   const [name, setName] = useState('Shruti');
//   const [hearts, setHearts] = useState([]);
//   const [fireworks, setFireworks] = useState([]);

//   useEffect(() => {
//     // Create floating hearts
//     const colors = ['text-pink-300', 'text-pink-400', 'text-rose-300', 'text-purple-300', 'text-fuchsia-300'];
//     const newHearts = Array.from({ length: 15 }, (_, i) => ({
//       id: i,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       left: `${Math.random() * 90}%`,
//       size: 16 + Math.floor(Math.random() * 12),
//       delay: `${Math.random() * 5}s`
//     }));
//     setHearts(newHearts);
    
//     // Auto-trigger confetti
//     setTimeout(() => setShowConfetti(true), 1000);
//   }, []);
  
//   const handleButtonClick = () => {
//     // Show fireworks
//     setShowFireworks(true);
    
//     // Generate random fireworks
//     const fireworkColors = ['#FF5252', '#FFD740', '#64FFDA', '#FF4081', '#7C4DFF', '#18FFFF'];
//     const newFireworks = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       color: fireworkColors[Math.floor(Math.random() * fireworkColors.length)],
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 60}%`,
//       size: 30 + Math.floor(Math.random() * 30),
//       delay: `${Math.random() * 1}s`
//     }));
//     setFireworks(newFireworks);
    
//     // Redirect after showing fireworks
//     setTimeout(() => {
//       window.location.href = "/celebration"; // Change this to your desired redirect URL
//     }, 3000); // 3 seconds of fireworks before redirect
//   };

//   return (
//     <div>
//       <div className="relative min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
//         {/* Floating hearts */}
//         {hearts.map((heart) => (
//           <div 
//             key={heart.id}
//             className={`absolute ${heart.color}`}
//             style={{
//               left: heart.left,
//               bottom: '-20px', 
//               animationDelay: heart.delay,
//               animationDuration: `${7 + Math.random() * 5}s`,
//               animation: 'float 8s ease-in-out infinite'
//             }}
//           >
//             <Heart size={heart.size} fill="currentColor" />
//           </div>
//         ))}
        
//         {/* Sparkles effect */}
//         {showConfetti && (
//           <div className="absolute inset-0">
//             {Array.from({ length: 50 }).map((_, i) => (
//               <div 
//                 key={i}
//                 className="absolute"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   animationDelay: `${Math.random() * 3}s`,
//                   animationDuration: `${2 + Math.random() * 3}s`,
//                   animation: 'twinkle 3s ease-in-out infinite'
//                 }}
//               >
//                 <Star size={10 + Math.random() * 10} fill="#FFDF00" color="#FFDF00" />
//               </div>
//             ))}
//           </div>
//         )}
        
//         {/* Fireworks effect */}
//         {showFireworks && (
//           <div className="absolute inset-0 z-20">
//             {fireworks.map((firework) => (
//               <div 
//                 key={firework.id}
//                 className="absolute"
//                 style={{
//                   left: firework.left,
//                   top: firework.top,
//                   animationDelay: firework.delay,
//                   animation: 'firework 1.5s ease-out forwards'
//                 }}
//               >
//                 <div 
//                   style={{
//                     background: firework.color,
//                     width: `${firework.size}px`,
//                     height: `${firework.size}px`,
//                     borderRadius: '50%',
//                     filter: 'blur(4px)',
//                     boxShadow: `0 0 30px 10px ${firework.color}`,
//                     animation: 'explode 1.5s ease-out forwards',
//                     opacity: 0
//                   }}
//                 />
//                 {/* Firework rays */}
//                 {[...Array(8)].map((_, i) => (
//                   <div 
//                     key={i}
//                     style={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       width: '4px',
//                       height: `${firework.size * 0.8}px`,
//                       background: firework.color,
//                       transform: `rotate(${i * 45}deg) translateY(-${firework.size * 0.4}px)`,
//                       transformOrigin: 'bottom center',
//                       animation: 'ray 1.5s ease-out forwards',
//                       opacity: 0
//                     }}
//                   />
//                 ))}
//               </div>
//             ))}
//           </div>
//         )}
        
//         {/* Birthday card - increased height */}
//         <div className="relative bg-white rounded-3xl shadow-xl p-8 max-w-3xl w-full z-10 border-4 border-pink-200">
//           {/* Decorative elements */}
//           <div className="absolute -top-6 -left-6">
//             <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center">
//               <Heart size={20} fill="white" color="white" />
//             </div>
//           </div>
//           <div className="absolute -top-6 -right-6">
//             <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center">
//               <Star size={20} fill="white" color="white" />
//             </div>
//           </div>
          
//           {/* Ribbon */}
//           <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//             <div className="w-40 h-6 bg-pink-400 rounded-md"></div>
//           </div>
          
//           <div className="mt-6">
//             {/* Title with cute font and gradient */}
//             <div className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 text-transparent bg-clip-text" style={{ fontFamily: 'cursive' }}>
//               Happy Birthday! Princess
//             </div>
            
//             <div className="mb-6">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter name"
//                 className="border-2 border-pink-200 rounded-full px-4 py-2 text-center max-w-xs focus:outline-none focus:border-pink-400 transition-colors"
//               />
//             </div>
            
//             <div className="text-2xl font-medium text-pink-500 mb-4" style={{ fontFamily: 'cursive' }}>
//               My Darling {name},
//             </div>
            
//             <p className="text-purple-700 mb-6">
//             From our late-night talks to our crazy adventures, I’m so grateful to have you in my life. You’re not just my best friend—you’re my sister, my partner-in-crime, and my safe place. Life wouldn’t be the same without your laughter, kindness, and endless support.

// I hope this year brings you all the happiness, success, and love you deserve. Keep shining as you always do! 💫 No matter what, I’ll always be here for you—through thick and thin, laughter and tears.
//             </p>
            
//             {/* Cake and button with increased spacing */}
//             <div className="flex flex-wrap items-center justify-center mt-10 mb-8 gap-16">
//               {/* Cake illustration with properly aligned candles - increased height */}
//               <div className="relative h-64 w-48">
//                 {/* Cake base */}
//                 <div className="w-48 h-20 bg-pink-200 rounded-xl absolute bottom-0"></div>
//                 <div className="w-40 h-16 bg-pink-300 rounded-xl absolute bottom-16 left-4"></div>
//                 <div className="w-32 h-14 bg-pink-400 rounded-xl absolute bottom-28 left-8"></div>
                
//                 {/* Candles - fixed positioning */}
//                 <div className="absolute bottom-40 left-16 w-2 h-10 bg-purple-300"></div>
//                 <div className="absolute bottom-48 left-16 w-4 h-6 bg-yellow-400 rounded-full" style={{ animation: 'flicker 0.6s ease-in-out infinite' }}></div>
                
//                 <div className="absolute bottom-40 left-24 w-2 h-10 bg-pink-300"></div>
//                 <div className="absolute bottom-48 left-24 w-4 h-6 bg-yellow-400 rounded-full" style={{ animation: 'flicker 0.6s ease-in-out infinite', animationDelay: '0.5s' }}></div>
                
//                 <div className="absolute bottom-40 left-32 w-2 h-10 bg-fuchsia-300"></div>
//                 <div className="absolute bottom-48 left-32 w-4 h-6 bg-yellow-400 rounded-full" style={{ animation: 'flicker 0.6s ease-in-out infinite', animationDelay: '0.8s' }}></div>
                
//                 {/* Decorations */}
//                 <div className="absolute bottom-12 left-10 w-4 h-4 bg-white rounded-full"></div>
//                 <div className="absolute bottom-16 left-20 w-4 h-4 bg-white rounded-full"></div>
//                 <div className="absolute bottom-18 left-30 w-4 h-4 bg-white rounded-full"></div>
//                 <div className="absolute bottom-30 left-16 w-4 h-4 bg-white rounded-full"></div>
//                 <div className="absolute bottom-26 left-26 w-4 h-4 bg-white rounded-full"></div>
//               </div>
              
//               {/* Button beside the cake */}
//               <div className="flex flex-col items-center justify-center">
//                 <div className="text-lg text-pink-500 mb-4">
//                   Time to celebrate!
//                 </div>
//                 <button
//                   onClick={handleButtonClick}
//                   className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
//                   style={{ fontFamily: 'cursive' }}
//                   disabled={showFireworks}
//                 >
//                   <Heart className="mr-2" size={20} fill="white" />
//                   Make a Wish!
//                 </button>
//                 <div className="flex mt-4 space-x-2">
//                   {[...Array(5)].map((_, i) => (
//                     <div key={i} className="text-pink-300" style={{ 
//                       animation: 'bounce 1s ease-in-out infinite',
//                       animationDelay: `${i * 0.1}s` 
//                     }}>
//                       <Heart size={14} fill="currentColor" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Redirect message */}
//         {showFireworks && (
//           <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
//             <div className="bg-white bg-opacity-80 p-4 rounded-xl shadow-lg text-pink-600 font-bold text-xl text-center animate-pulse">
//               Your wish is coming true!
//             </div>
//           </div>
//         )}
        
//         <style jsx>{`
//           @keyframes float {
//             0%, 100% { transform: translateY(0) rotate(0deg); }
//             50% { transform: translateY(-100px) rotate(5deg); }
//           }
          
//           @keyframes twinkle {
//             0% { opacity: 0; transform: scale(0.5); }
//             50% { opacity: 1; transform: scale(1.2); }
//             100% { opacity: 0; transform: scale(0.5); }
//           }
          
//           @keyframes flicker {
//             0%, 100% { opacity: 1; transform: scale(1); }
//             50% { opacity: 0.6; transform: scale(0.8); }
//           }
          
//           @keyframes bounce {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-5px); }
//           }
          
//           @keyframes firework {
//             0% { transform: scale(0); }
//             50% { transform: scale(1); }
//             100% { transform: scale(1.2); }
//           }
          
//           @keyframes explode {
//             0% { transform: scale(0); opacity: 0; }
//             20% { opacity: 1; }
//             50% { transform: scale(1); opacity: 0.8; }
//             100% { transform: scale(1.5); opacity: 0; }
//           }
          
//           @keyframes ray {
//             0% { transform: rotate(calc(var(--r) * 45deg)) translateY(0); opacity: 0; }
//             20% { opacity: 1; }
//             50% { transform: rotate(calc(var(--r) * 45deg)) translateY(-100px); opacity: 0.8; }
//             100% { transform: rotate(calc(var(--r) * 45deg)) translateY(-200px); opacity: 0; }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default BirthdayPage;



import React, { useState, useEffect,useRef } from 'react';
import { Heart, Star } from 'lucide-react';

const BirthdayPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [name, setName] = useState('Shruti');
  const [hearts, setHearts] = useState([]);
  const [fireworks, setFireworks] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create floating hearts - adjusted for better mobile visibility
    const colors = ['text-pink-300', 'text-pink-400', 'text-rose-300', 'text-purple-300', 'text-fuchsia-300'];
    const heartCount = window.innerWidth < 768 ? 8 : 15; // Fewer hearts on mobile
    const newHearts = Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 90}%`,
      size: window.innerWidth < 768 ? (14 + Math.floor(Math.random() * 8)) : (16 + Math.floor(Math.random() * 12)),
      delay: `${Math.random() * 5}s`
    }));
    setHearts(newHearts);
    
    // Auto-trigger confetti
    setTimeout(() => setShowConfetti(true), 1000);
    
    // Handle window resize
    const handleResize = () => {
      // Adjust elements based on new screen size
      const resizedHeartCount = window.innerWidth < 768 ? 8 : 15;
      const resizedHearts = Array.from({ length: resizedHeartCount }, (_, i) => ({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        left: `${Math.random() * 90}%`,
        size: window.innerWidth < 768 ? (14 + Math.floor(Math.random() * 8)) : (16 + Math.floor(Math.random() * 12)),
        delay: `${Math.random() * 5}s`
      }));
      setHearts(resizedHearts);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleButtonClick = () => {
    // Show fireworks with improved behavior
    setShowFireworks(true);
    
    // Generate enhanced fireworks
    const fireworkColors = ['#FF5252', '#FFD740', '#64FFDA', '#FF4081', '#7C4DFF', '#18FFFF', '#FF9E80', '#B388FF'];
    const fireworkCount = window.innerWidth < 768 ? 12 : 20; // Adjust count for mobile
    
    // Create fireworks in waves for a more realistic effect
    const createFireworkWave = (waveIndex) => {
      const newFireworks = Array.from({ length: fireworkCount }, (_, i) => ({
        id: `wave${waveIndex}-${i}`,
        color: fireworkColors[Math.floor(Math.random() * fireworkColors.length)],
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 70}%`,
        size: 20 + Math.floor(Math.random() * 30),
        delay: `${Math.random() * 0.5}s`,
        duration: `${1 + Math.random() * 1}s`,
        rayCount: 8 + Math.floor(Math.random() * 8) // Random number of rays between 8-16
      }));
      
      setFireworks(prev => [...prev, ...newFireworks]);
    };
    
    // Create multiple waves of fireworks
    createFireworkWave(0);
    setTimeout(() => createFireworkWave(1), 600);
    setTimeout(() => createFireworkWave(2), 1200);
    
    // Redirect after showing fireworks
    setTimeout(() => {
      window.location.href = "/memories"; // Change this to your desired redirect URL
    }, 10000);
    
    
    // Extended to 4 seconds to enjoy more fireworks
  };

  const [hasPlayedMusic, setHasPlayedMusic] = useState(false);

const handlePlayMusic = () => {
  if (audioRef.current && !hasPlayedMusic) {
    audioRef.current.play().then(() => {
      setHasPlayedMusic(true);
    }).catch((err) => {
      console.error("Autoplay failed: ", err);
    });
  }
};

  return (
    <div onTouchStart={handlePlayMusic}>
      <audio ref={audioRef} src="/birthday.mp3" loop />
      <div className="relative min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 overflow-hidden flex flex-col items-center justify-center p-4 md:p-6 text-center">
        {/* Floating hearts */}
        {hearts.map((heart) => (
          <div 
            key={heart.id}
            className={`absolute ${heart.color}`}
            style={{
              left: heart.left,
              bottom: '-20px', 
              animationDelay: heart.delay,
              animationDuration: `${7 + Math.random() * 5}s`,
              animation: 'float 8s ease-in-out infinite'
            }}
          >
            <Heart size={heart.size} fill="currentColor" />
          </div>
        ))}
        
        {/* Sparkles effect - reduced for mobile */}
        {showConfetti && (
          <div className="absolute inset-0">
            {Array.from({ length: window.innerWidth < 768 ? 30 : 50 }).map((_, i) => (
              <div 
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  animation: 'twinkle 3s ease-in-out infinite'
                }}
              >
                <Star size={8 + Math.random() * 8} fill="#FFDF00" color="#FFDF00" />
              </div>
            ))}
          </div>
        )}
        
        {/* Enhanced Fireworks effect */}
        {showFireworks && (
          <div className="absolute inset-0 z-20">
            {fireworks.map((firework) => (
              <div 
                key={firework.id}
                className="absolute"
                style={{
                  left: firework.left,
                  top: firework.top,
                  animationDelay: firework.delay,
                  animation: `firework ${firework.duration} cubic-bezier(0.22, 0.61, 0.36, 1) forwards`
                }}
              >
                {/* Central explosion */}
                <div 
                  style={{
                    background: firework.color,
                    width: `${firework.size}px`,
                    height: `${firework.size}px`,
                    borderRadius: '50%',
                    filter: 'blur(4px)',
                    boxShadow: `0 0 30px 10px ${firework.color}`,
                    animation: 'explode 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards',
                    opacity: 0
                  }}
                />
                
                {/* Dynamic firework rays */}
                {Array.from({ length: firework.rayCount }).map((_, i) => {
                  const angle = (360 / firework.rayCount) * i;
                  const rayLength = firework.size * (0.6 + Math.random() * 0.4); // Varied ray lengths
                  
                  return (
                    <div 
                      key={i}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: `${2 + Math.random() * 3}px`, // Varied ray thickness
                        height: `${rayLength}px`,
                        background: firework.color,
                        transform: `rotate(${angle}deg) translateY(-${rayLength / 2}px)`,
                        transformOrigin: 'bottom center',
                        animation: `ray 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards`,
                        animationDelay: `${Math.random() * 0.2}s`, // Slightly varied timing
                        opacity: 0
                      }}
                    />
                  );
                })}
                
                {/* Additional sparkles */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={`sparkle-${i}`}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: `${3 + Math.random() * 2}px`,
                      height: `${3 + Math.random() * 2}px`,
                      background: 'white',
                      borderRadius: '50%',
                      transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg) translateY(-${firework.size * 0.3 + Math.random() * firework.size * 0.7}px)`,
                      animation: `sparkle 1.5s ease-out forwards`,
                      animationDelay: `${0.1 + Math.random() * 0.3}s`,
                      opacity: 0
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
        
        {/* Birthday card - made responsive */}
        <div className="relative bg-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full z-10 border-4 border-pink-200">
          {/* Decorative elements */}
          <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-pink-300 rounded-full flex items-center justify-center">
              <Heart size={window.innerWidth < 640 ? 14 : 20} fill="white" color="white" />
            </div>
          </div>
          <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-purple-300 rounded-full flex items-center justify-center">
              <Star size={window.innerWidth < 640 ? 14 : 20} fill="white" color="white" />
            </div>
          </div>
          
          {/* Ribbon */}
          <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
            <div className="w-28 sm:w-40 h-4 sm:h-6 bg-pink-400 rounded-md"></div>
          </div>
          
          <div className="mt-4 sm:mt-6">
            {/* Title with cute font and gradient - responsive size */}
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 text-transparent bg-clip-text" style={{ fontFamily: 'cursive' }}>
              Happy Birthday! Princess
            </div>
            
           
            
            <div className="text-xl sm:text-2xl font-medium text-pink-500 mb-3 sm:mb-4" style={{ fontFamily: 'cursive' }}>
              My Darling {name},
            </div>
            
            <p className="text-sm sm:text-base text-purple-700 mb-4 sm:mb-6">
              From our late-night talks to our crazy adventures, I'm so grateful to have you in my life. You're not just my best friend—you're my sister, my partner-in-crime, and my safe place. Life wouldn't be the same without your laughter, kindness, and endless support.
              <br /><br />
              I hope this year brings you all the happiness, success, and love you deserve. Keep shining as you always do! 💫 No matter what, I'll always be here for you—through thick and thin, laughter and tears.
            </p>
            
            {/* Cake and button with responsive layout */}
            <div className="flex flex-col md:flex-row items-center justify-center mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-6 md:mb-8 gap-6 md:gap-16">
              {/* Cake illustration with properly aligned candles - responsive size */}
              <div className="relative h-44 sm:h-56 md:h-64 w-36 sm:w-44 md:w-48">
                {/* Cake base */}
                <div className="w-36 sm:w-44 md:w-48 h-14 sm:h-16 md:h-20 bg-pink-200 rounded-xl absolute bottom-0"></div>
                <div className="w-30 sm:w-36 md:w-40 h-12 sm:h-14 md:h-16 bg-pink-300 rounded-xl absolute bottom-12 sm:bottom-14 md:bottom-16 left-3 sm:left-4"></div>
                <div className="w-24 sm:w-28 md:w-32 h-10 sm:h-12 md:h-14 bg-pink-400 rounded-xl absolute bottom-22 sm:bottom-26 md:bottom-28 left-6 sm:left-8"></div>
                
                {/* Candles - fixed positioning */}
                <div className="absolute bottom-32 sm:bottom-36 md:bottom-40 left-12 sm:left-14 md:left-16 w-1.5 sm:w-2 h-8 sm:h-10 bg-purple-300"></div>
                <div className="absolute bottom-38 sm:bottom-44 md:bottom-48 left-12 sm:left-14 md:left-16 w-3 sm:w-4 h-4 sm:h-6 bg-yellow-400 rounded-full" style={{ animation: 'flicker 0.6s ease-in-out infinite' }}></div>
                
                <div className="absolute bottom-32 sm:bottom-36 md:bottom-40 left-18 sm:left-20 md:left-24 w-1.5 sm:w-2 h-8 sm:h-10 bg-pink-300"></div>
                <div className="absolute bottom-38 sm:bottom-44 md:bottom-48 left-18 sm:left-20 md:left-24 w-3 sm:w-4 h-4 sm:h-6 bg-yellow-400 rounded-full" style={{ animation: 'flicker 0.6s ease-in-out infinite', animationDelay: '0.5s' }}></div>
                
                <div className="absolute bottom-32 sm:bottom-36 md:bottom-40 left-24 sm:left-28 md:left-32 w-1.5 sm:w-2 h-8 sm:h-10 bg-fuchsia-300"></div>
                <div className="absolute bottom-38 sm:bottom-44 md:bottom-48 left-24 sm:left-28 md:left-32 w-3 sm:w-4 h-4 sm:h-6 bg-yellow-400 rounded-full" style={{ animation: 'flicker 0.6s ease-in-out infinite', animationDelay: '0.8s' }}></div>
                
                {/* Decorations */}
                <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-8 sm:left-9 md:left-10 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-12 sm:bottom-14 md:bottom-16 left-16 sm:left-18 md:left-20 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-14 sm:bottom-16 md:bottom-18 left-22 sm:left-26 md:left-30 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-22 sm:bottom-26 md:bottom-30 left-12 sm:left-14 md:left-16 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-20 sm:bottom-22 md:bottom-26 left-20 sm:left-22 md:left-26 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full"></div>
              </div>
              
              {/* Button beside the cake */}
              <div className="flex flex-col items-center justify-center mt-2 md:mt-0">
                <div className="text-base sm:text-lg text-pink-500 mb-2 sm:mb-4">
                  Time to celebrate!
                </div>
                <button
                  
                  onClick={handleButtonClick}
                  className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: 'cursive' }}
                  disabled={showFireworks}
                >
                  <Heart className="mr-2" size={window.innerWidth < 640 ? 16 : 20} fill="white" />
                  Make a Wish!
                </button>
                <div className="flex mt-3 sm:mt-4 space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-pink-300" style={{ 
                      animation: 'bounce 1s ease-in-out infinite',
                      animationDelay: `${i * 0.1}s` 
                    }}>
                      <Heart size={window.innerWidth < 640 ? 12 : 14} fill="currentColor" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Redirect message */}
        {showFireworks && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="bg-white bg-opacity-80 p-3 sm:p-4 rounded-xl shadow-lg text-pink-600 font-bold text-lg sm:text-xl text-center animate-pulse">
              Your wish is coming true!
            </div>
          </div>
        )}
        
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-100px) rotate(5deg); }
          }
          
          @keyframes twinkle {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(0.5); }
          }
          
          @keyframes flicker {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(0.8); }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes firework {
            0% { transform: scale(0); opacity: 0; }
            20% { transform: scale(0.4); opacity: 0.2; }
            40% { transform: scale(0.8); opacity: 0.8; }
            60% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.2); opacity: 0; }
          }
          
          @keyframes explode {
            0% { transform: scale(0); opacity: 0; }
            20% { opacity: 1; }
            50% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.5); opacity: 0; }
          }
          
          @keyframes ray {
            0% { transform-origin: center; transform: scale(0); opacity: 0; }
            20% { opacity: 1; }
            60% { transform: scale(1); opacity: 0.8; transform-origin: bottom center; }
            100% { transform: scale(0); opacity: 0; transform-origin: bottom center; }
          }
          
          @keyframes sparkle {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            20% { opacity: 1; }
            60% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
            100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          }
          
          /* Media queries for responsive animations */
          @media (max-width: 768px) {
            @keyframes float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-60px) rotate(5deg); }
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default BirthdayPage;