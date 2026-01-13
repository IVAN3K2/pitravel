// src/components/Destinations.jsx
import { motion } from "framer-motion";
import { FaPlane, FaLandmark, FaGlobeAmericas } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Section Destinations pour PI TRAVEL
 * Affiche plusieurs cartes pour les destinations disponibles
 */
const Destinations = () => {
  const { t } = useTranslation();

  // Données des destinations
  const destinations = [
    {
      icon: <FaPlane size={30} className="text-secondary" />,
      title: t("destinations.europe.title"),
      description: t("destinations.europe.description"),
    },
    {
      icon: <FaLandmark size={30} className="text-secondary" />,
      title: t("destinations.americas.title"),
      description: t("destinations.americas.description"),
    },
    {
      icon: <FaGlobeAmericas size={30} className="text-secondary" />,
      title: t("destinations.asia.title"),
      description: t("destinations.asia.description"),
    },
  ];

  return (
    <section
      id="destinations"
      className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left"
    >
      {/* ================= Titre de la section ================= */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {t("destinations.title")}
      </motion.h2>

      {/* ================= Cartes des destinations ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
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
            {/* Icône avec micro parallax */}
            <motion.div
              className="mb-4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {dest.icon}
            </motion.div>

            {/* Titre */}
            <h3 className="text-xl font-semibold text-primary mb-2">
              {dest.title}
            </h3>

            {/* Description */}
            <p className="text-primary/80">{dest.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
