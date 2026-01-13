// src/components/Programs.jsx
import { motion } from "framer-motion";
import { FaPlane, FaBook, FaUserGraduate } from "react-icons/fa"; // Icônes pour chaque programme
import { useTranslation } from "react-i18next";

/**
 * Section Programs pour PI TRAVEL
 * Affiche plusieurs cartes représentant les programmes disponibles
 */
const Programs = () => {
  const { t } = useTranslation();

  // Données des programmes avec traduction
  const programs = [
    {
      icon: <FaPlane size={30} className="text-secondary" />,
      title: t("programs.studyAbroad.title"),
      description: t("programs.studyAbroad.description"),
    },
    {
      icon: <FaBook size={30} className="text-secondary" />,
      title: t("programs.languageCourses.title"),
      description: t("programs.languageCourses.description"),
    },
    {
      icon: <FaUserGraduate size={30} className="text-secondary" />,
      title: t("programs.professionalTraining.title"),
      description: t("programs.professionalTraining.description"),
    },
  ];

  return (
    <section
      id="programs"
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
        {t("programs.title")}
      </motion.h2>

      {/* ================= Cartes des programmes ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
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
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {program.icon}
            </motion.div>

            {/* Titre */}
            <h3 className="text-xl font-semibold text-primary mb-2">
              {program.title}
            </h3>

            {/* Description */}
            <p className="text-primary/80">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
