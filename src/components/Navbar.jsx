import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Button from "./Button";

const navLinks = [
  { name: "navbar.home", href: "#home" },
  { name: "navbar.about", href: "#about" },
  { name: "navbar.programs", href: "#programs" },
  { name: "navbar.destinations", href: "#destinations" },
  { name: "navbar.process", href: "#process" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-light/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 font-bold">
            <img
              src="/logo.png"
              alt="PI TRAVEL Logo"
              className="h-10 w-auto"
            />
            PI TRAVEL
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium hover:text-secondary transition"
              >
                {t(link.name)}
              </a>
            ))}

            <Button href="https://wa.me/682049276">
              {t("navbar.cta")}
            </Button>

            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="flex items-center gap-1"
            >
              <FaGlobe />
              {i18n.language.toUpperCase()}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu (FIXED VERSION) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-light shadow-lg"
          >
            <div className="flex flex-col px-6 py-4 gap-4">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium hover:text-secondary transition"
                >
                  {t(link.name)}
                </a>
              ))}

              <div className="flex items-center justify-between mt-4">
                {/* CTA */}
                <Button
                    href="https://wa.me/237682049276"
                    onClick={() => setIsOpen(false)}
                >
                    {t("navbar.cta")}
                </Button>

                {/* Language switch */}
                <Button
                    variant="outline"
                    onClick={toggleLanguage}
                    className="flex items-center gap-2"
                >
                    <FaGlobe />
                    {i18n.language.toUpperCase()}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
