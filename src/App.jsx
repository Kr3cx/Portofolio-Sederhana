import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectCard from './components/Project';
import SocialButton from './components/SocialButton';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  // Ambil tema dari localStorage saat awal render
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6 bg-base-200">
        {/* Navigasi */}
        <nav className="flex justify-center gap-4 mb-6">
          <Link className="btn btn-sm btn-outline" to="/">Home</Link>
          <Link className="btn btn-sm btn-outline" to="/projects">Projects</Link>
          <Link className="btn btn-sm btn-outline" to="/contact">Contact</Link>
        </nav>

        {/* Tombol Toggle Tema */}
        <button
          onClick={toggleTheme}
          className="btn btn-outline mb-4 transition transform duration-200 ease-in-out hover:-translate-y-1 active:translate-y-1 active:scale-95 shadow-md hover:shadow-xl"
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        {/* Routes */}
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center gap-6">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9FkeUinz1H6FKD_99u-Qxvis3Ghfy42UWA&s"
                      alt="avatar"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h1 className="text-2xl font-bold">Mohammad Kresna</h1>
                  <p className="text-sm max-w-xs">
                    Frontend Developer | React JS, Next JS
                  </p>
                </div>

                <div className="flex flex-col max-w-xs gap-4">
                  <SocialButton
                    platform="GitHub"
                    url="https://github.com/Kr3cx"
                    buttonColor="warning"
                  />
                  <SocialButton
                    platform="LinkedIn"
                    url="https://id.linkedin.com/in/mohammad-kresna-a14987344"
                    buttonColor="info"
                  />
                  <SocialButton
                    platform="Twitter"
                    url="https://twitter.com/"
                    buttonColor="primary"
                  />
                </div>
              </div>
            }
          />

          {/* Projects */}
          <Route
            path="/projects"
            element={
              <div className="grid gap-4 w-full max-w-md mx-auto">
                <ProjectCard
                  title="Todo App"
                  description="A simple todo list with CRUD functionality."
                  link="https://github.com/"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="My personal portfolio made with React and Tailwind CSS."
                  link="https://github.com/"
                />
              </div>
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold">Contact Me</h2>
                <p className="text-sm text-gray-500">Feel free to reach out via email or social media.</p>
                <form className="flex flex-col gap-2 w-full max-w-xs mx-auto">
                  <input type="text" placeholder="Your Name" className="input input-bordered" />
                  <input type="email" placeholder="Your Email" className="input input-bordered" />
                  <textarea placeholder="Your Message" className="textarea textarea-bordered"></textarea>
                  <button type="submit" className="btn btn-primary">Send</button>
                </form>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
