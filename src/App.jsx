import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };


  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme);
  // }, [theme]);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-6 gap-6 bg-base-200'>
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9FkeUinz1H6FKD_99u-Qxvis3Ghfy42UWA&s" alt="avatar" />
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold">Mohammad Kresna</h1>
        <p className="text-sm max-w-xs">
          Frontend Developer | React JS, Next JS
        </p>
      </div>

      <div className='flex flex-col max-w-xs gap-4'>
        <a
          className="btn btn-warning w-[300px] flex items-center justify-center gap-2"
          href="https://github.com/Kr3cxs"
          target="_blank"
        >
          <img src="https://img.icons8.com/ios_filled/512/github.png" alt="GitHub Logo" className="w-5 h-5" />
          GitHub
        </a>

        <a
          className="btn btn-info w-[300px]"
          href="https://id.linkedin.com/in/mohammad-kresna-a14987344"
          target="_blank"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png" alt="GitHub Logo" className="w-5 h-5" />
          LinkedIn
        </a>

        <a
          className="btn btn-primary w-[300px]"
          href="https://twitter.com/"
          target="_blank"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg" alt="GitHub Logo" className="w-5 h-5" />
          Twitter
        </a>
      </div>

      <button
        onClick={toggleTheme}
        className="btn btn-outline mt-4 transition transform duration-200 ease-in-out hover:-translate-y-1 active:translate-y-1 active:scale-95 shadow-md hover:shadow-xl"
      >
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>

    </div>
  );
}

export default App;


// Jedag Jedug Epilepsi
// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   // Theme switching
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTheme(prev => {
//         const newTheme = prev === 'light' ? 'dark' : 'light';
//         document.documentElement.setAttribute('data-theme', newTheme);
//         return newTheme;
//       });
//     }, 2000); // Switch theme every 1 second
//     return () => clearInterval(interval);
//   }, []);

//   // Avatar switching
//   const avatars = [
//     "https://i1.sndcdn.com/artworks-000123105989-jla8r5-t1080x1080.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9FkeUinz1H6FKD_99u-Qxvis3Ghfy42UWA&s"
  
//   ];
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const avatarInterval = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % avatars.length);
//     }, 2000); // Switch avatar every 2 seconds
//     return () => clearInterval(avatarInterval);
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6 bg-base-200 transition-colors duration-2000">
//       {/* Avatar with fade effect */}
//       <div className="relative w-24 h-24 rounded-full overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-2">
//         {avatars.map((url, index) => (
//           <img
//             key={index}
//             src={url}
//             alt={`Avatar ${index}`}
//             className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
//               index === activeIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Text content */}
//       <div className="text-center">
//         <h1 className="text-2xl font-bold">Mohammad Kresna</h1>
//         <p className="text-sm max-w-xs">
//           Frontend Developer | React JS, Next JS
//         </p>
//       </div>

//       {/* Social buttons */}
//       <div className="flex flex-col max-w-xs gap-4">
//         <a
//           className="btn btn-warning w-[300px] flex items-center justify-center gap-2"
//           href="https://github.com/Kr3cxs"
//           target="_blank"
//         >
//           <img src="https://img.icons8.com/ios_filled/512/github.png" alt="GitHub Logo" className="w-5 h-5" />
//           GitHub
//         </a>

//         <a
//           className="btn btn-info w-[300px] flex items-center justify-center gap-2"
//           href="https://id.linkedin.com/in/mohammad-kresna-a14987344"
//           target="_blank"
//         >
//           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png" alt="LinkedIn Logo" className="w-5 h-5" />
//           LinkedIn
//         </a>

//         <a
//           className="btn btn-primary w-[300px] flex items-center justify-center gap-2"
//           href="https://twitter.com/"
//           target="_blank"
//         >
//           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg" alt="Twitter Logo" className="w-5 h-5" />
//           Twitter
//         </a>
//       </div>

//     </div>
//   );
// }

// export default App;
