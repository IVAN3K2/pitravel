import { motion } from "framer-motion";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center md:text-left md:flex-row max-w-7xl mx-auto px-6 py-6 gap-8"
    >
      {/* ================= Hero Texte ================= */}
      <motion.div
        className="flex-1"
        // Animation qui se déclenche chaque fois que la section est visible
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl text-primary/80 mb-6">
          {t("hero.subtitle")}
        </p>

        {/* CTA */}
        <Button href="#contact">
          {t("navbar.cta")}
        </Button>
      </motion.div>

      {/* ================= Hero Image ================= */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Conteneur carré */}
        <div className="w-[clamp(280px,35vw,430px)] aspect-square overflow-hidden rounded-xl shadow-xl">
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
