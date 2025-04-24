import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectCard from "./components/Project";
import SocialButton from "./components/SocialButton";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const avatars = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9FkeUinz1H6FKD_99u-Qxvis3Ghfy42UWA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrv_9SF1dtsRs6ttjZwNLVM-6vKxte2QzXQ&s",
  ];
  const [avatarIndex, setAvatarIndex] = useState(0);

  const fullName = "Mohammad Kresna";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  // Toggle tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Animasi avatar berganti tiap 1 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Efek ketik nama
  // Efek ketik nama berkali-kali setiap 2 detik
  useEffect(() => {
    let typingInterval;
    let cycleTimeout;
    let currentIndex = 0;

    const typeEffect = () => {
      typingInterval = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setTypedName(fullName.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          cycleTimeout = setTimeout(() => {
            currentIndex = 0;
            typeEffect(); // ulang efek ketik
          }, 2000); // jeda 2 detik sebelum ulangi
        }
      }, 150);
    };

    typeEffect();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(cycleTimeout);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6 bg-base-200">
        {/* Navigasi */}
        <nav className="flex justify-center gap-4 mb-6">
          <Link className="btn btn-sm btn-outline" to="/">
            Home
          </Link>
          <Link className="btn btn-sm btn-outline" to="/projects">
            Projects
          </Link>
          <Link className="btn btn-sm btn-outline" to="/contact">
            Contact
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center gap-6">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 transition duration-300 hover:ring-yellow-400 hover:shadow-lg hover:shadow-yellow-400">
                    <img
                      src={avatars[avatarIndex]}
                      alt="avatar"
                      className="transition duration-500 ease-in-out"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h1 className="text-2xl font-bold font-mono whitespace-nowrap border-r-2 border-primary pr-2 animate-pulse">
                    {typedName}
                  </h1>
                  <p className="text-sm max-w-xs">
                    Cyber Security | Blue Team & Red Team
                  </p>
                </div>

                <div className="flex flex-col max-w-xs gap-4 w-full">
                  <SocialButton
                    platform="GitHub"
                    url="https://github.com/Kr3cx"
                    buttonColor="warning"
                    className="w-full btn-warning"
                    logoUrl="https://img.icons8.com/ios_filled/512/github.png"
                  />
                  <SocialButton
                    platform="LinkedIn"
                    url="https://id.linkedin.com/in/mohammad-kresna-a14987344"
                    buttonColor="info"
                    className="w-full btn-info"
                    logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
                  />
                  <SocialButton
                    platform="Twitter"
                    url="https://twitter.com/"
                    buttonColor="primary"
                    className="w-full"
                    logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg"
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
                  title="Website ElMovie.site"
                  description="Website Menampilkan Informasi Terkait Film."
                  link="https://elmovie.site/"
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
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        {/* Toggle Tema */}
        <button
          onClick={toggleTheme}
          className="btn btn-outline mb-4 transition transform duration-200 ease-in-out hover:-translate-y-1 active:translate-y-1 active:scale-95 shadow-md hover:shadow-xl"
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </Router>
  );
}

export default App;
