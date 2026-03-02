import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface NavItems {
  label: string;
}

interface HeaderProps {
  menuItem: NavItems[];
}

export default function Header({ menuItem }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScoll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScoll);
    return () => window.removeEventListener("scroll", handleScoll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: scrolled
          ? "rgba(226, 243, 94, 0.6)" 
          : "rgba(226, 243, 94, 1)",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-2 transition-all duration-300 backdrop-blur-md"
    >
      <div className="max-w-7xl h-10 mx-auto flex items-center justify-between">
        {/* Left: Small Logo */}
        <div className="shrink-0">
          <img src="/assets/flower.png" className="w-8 md:w-10" alt="Icon" />
        </div>

        {/* Center: Desktop Menu (Hidden on Mobile/Tablet) */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {menuItem.map((item, index) => (
            <p
              key={index}
              className="relative text-black font-medium cursor-pointer group text-sm xl:text-base"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-950 transition-all group-hover:w-full"></span>
            </p>
          ))}
        </div>

        {/* Right: Main Logo & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <img
            className="w-32 md:w-40 lg:w-48 h-auto object-contain"
            src="/assets/Logo.png"
            alt="Main Logo"
          />

          {/* Mobile Menu Button (Visible only on mobile/tablet) */}
          <button
            className="lg:hidden p-2 text-white bg-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Simple Dynamic Hamburger/X icon */}
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-all ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#E2F35E] overflow-hidden border-t border-black/10"
          >
            <div className="flex flex-col gap-4 p-6">
              {menuItem.map((item, index) => (
                <p
                  key={index}
                  className="text-black text-lg font-bold uppercase tracking-wider"
                >
                  {item.label}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
