/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MousePositionProvider } from "./contexts/MousePositionContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import CustomCursor from "./components/ui/CustomCursor";
import BackToTopButton from "./components/ui/BackToTop";

const App = () => {
  return (
    <ThemeProvider>
      <MousePositionProvider>
        <Router>
          <div className="bg-white text-black dark:bg-slate-900 dark:text-white min-h-screen transition-colors duration-300">
            {/* // navbar */}
            <Navbar />
            {/* // cursor */}
            <CustomCursor />
            {/* // main */}
            <main className="pt-16">
              <Home />
            </main>
            {/* // footer */}
            <Footer />
            <BackToTopButton />
          </div>
        </Router>
      </MousePositionProvider>
    </ThemeProvider>
  );
};

export default App;
