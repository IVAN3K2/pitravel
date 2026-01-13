// src/components/About.jsx
import { motion } from "framer-motion";
import { FaGlobe, FaHandshake, FaStar } from "react-icons/fa"; // icônes pour les cartes
import { useTranslation } from "react-i18next";

/**
 * Section About pour PI TRAVEL
 * Affiche 3 cartes "Pourquoi choisir PI TRAVEL"
 * - Mobilité internationale
 * - Confiance et fiabilité
 * - Excellence et suivi personnalisé
 */
const About = () => {
  const { t } = useTranslation(); // Hook i18n pour traductions

  // Données des cartes avec traduction
  const cards = [
    {
      icon: <FaGlobe size={30} className="text-secondary" />,
      title: t("about.internationalMobility.title"),
      description: t("about.internationalMobility.description"),
    },
    {
      icon: <FaHandshake size={30} className="text-secondary" />,
      title: t("about.trustedPartner.title"),
      description: t("about.trustedPartner.description"),
    },
    {
      icon: <FaStar size={30} className="text-secondary" />,
      title: t("about.excellenceGuidance.title"),
      description: t("about.excellenceGuidance.description"),
    },
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left"
      aria-label="Pourquoi choisir PI TRAVEL"
    >
      {/* ================= Titre de la section ================= */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {t("about.title")}
      </motion.h2>

      {/* ================= Petite description ================= */}
      <motion.p
        className="text-primary/80 text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t("about.description")}
      </motion.p>

      {/* ================= Cartes ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-light rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-transform"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            {/* ================= Icône avec micro parallax ================= */}
            <motion.div
              className="mb-4"
              animate={{ y: [0, -8, 0] }} // micro parallax infini
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {card.icon}
            </motion.div>

            {/* Titre */}
            <h3 className="text-xl font-semibold text-primary mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-primary/80">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
