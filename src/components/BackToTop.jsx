import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  /**
   * Détermine si le bouton est visible
   */
  const [visible, setVisible] = useState(false);

  /**
   * Controls Framer Motion
   * Permet de lancer une animation à la demande
   */
  const controls = useAnimationControls();

  /**
   * Affiche / masque le bouton selon le scroll
   */
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 90);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  /**
   * 🎬 Animation automatique toutes les 3 secondes
   * uniquement lorsque le bouton est visible
   */
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      controls.start({
        y: [0, -10, 0],        // petit bounce vertical
        scale: [1, 1.15, 1],   // effet pulse
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      });
    }, 3000); // ⏱️ toutes les 3 secondes

    return () => clearInterval(interval);
  }, [visible, controls]);

  /**
   * Scroll vers le haut
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /**
   * Rendu
   */
  return (
    visible && (
      <motion.button
        onClick={scrollToTop}
        animate={controls}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 right-6 bg-secondary text-primary p-4 rounded-full shadow-lg hover:bg-yellow-600 hover:scale-110 transition z-50"
        aria-label="Retour en haut"
      >
        <FaArrowUp />
      </motion.button>
    )
  );
}