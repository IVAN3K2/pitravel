// src/components/Process.jsx
import { motion } from "framer-motion";
import { FaFileAlt, FaPlaneDeparture, FaUniversity, FaHandshake } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Section Process pour PI TRAVEL
 * Affiche le processus étape par étape pour postuler
 * Mobile-first, tablette et desktop optimisés
 */
const Process = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <FaFileAlt size={30} className="text-secondary" />,
      title: t("process.step1.title"),
      description: t("process.step1.description"),
    },
    {
      icon: <FaPlaneDeparture size={30} className="text-secondary" />,
      title: t("process.step2.title"),
      description: t("process.step2.description"),
    },
    {
      icon: <FaUniversity size={30} className="text-secondary" />,
      title: t("process.step3.title"),
      description: t("process.step3.description"),
    },
    {
      icon: <FaHandshake size={30} className="text-secondary" />,
      title: t("process.step4.title"),
      description: t("process.step4.description"),
    },
  ];

  return (
    <section
      id="process"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20" aria-label="Processus PI TRAVEL"
    >
      {/* ================= Titre ================= */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {t("process.title")}
      </motion.h2>

      {/* ================= Cartes des étapes ================= */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="
              bg-light rounded-xl p-6 shadow-lg
              flex flex-col items-center text-center
              hover:shadow-2xl transition-transform duration-300
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            {/* Icône flottante */}
            <motion.div
              className="mb-4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {step.icon}
            </motion.div>

            {/* Titre */}
            <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl font-semibold text-primary mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-sm lg:text-base text-primary/80">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;