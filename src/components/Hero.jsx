// src/components/Hero.jsx
import { motion } from "framer-motion";
import Button from "./Button";
import { useTranslation } from "react-i18next";

/**
 * Hero section pour PI TRAVEL
 * Texte + image + CTA
 * Responsive mobile-first → tablette → desktop
 */
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="
        relative flex flex-col-reverse md:flex-row
        items-center justify-center
        text-center md:text-left
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        py-4 sm:py-6 lg:py-8
        gap-8
      "
      aria-label="Section principale de présentation de PI TRAVEL et accès à la candidature ou au contact via WhatsApp"
    >
      {/* ================= Hero Texte ================= */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight sm:leading-snug lg:leading-snug">
          {t("hero.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-primary/80 mb-6 max-w-xl mx-auto md:mx-0">
          {t("hero.subtitle")}
        </p>

        {/* ================= CTA ================= */}
        <div className="flex justify-center md:justify-start">
          <Button
            href="https://wa.me/682049276"
            className="px-6 py-3 text-lg sm:text-xl rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            {t("navbar.cta")}
          </Button>
        </div>
      </motion.div>

      {/* ================= Hero Image ================= */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-[clamp(250px,40vw,450px)] aspect-square overflow-hidden rounded-xl shadow-xl">
          <img
            src="/hero-image.png"
            alt="Étudiant voyageant à l'étranger avec PI TRAVEL"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
