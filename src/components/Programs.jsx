// src/components/Programs.jsx
import { motion } from "framer-motion";
import { FaPlane, FaBook, FaUserGraduate } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Section Programs pour PI TRAVEL
 * Affiche les cartes des programmes disponibles
 * Cartes parfaitement centrées et alignées
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
      className="max-w-7xl mx-auto px-6 py-16"
      aria-label="Nos programmes"
    >
      {/* ================= Titre ================= */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {t("programs.title")}
      </motion.h2>

      {/* ================= Cartes ================= */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="
              bg-light rounded-xl p-6 shadow-lg
              flex flex-col items-center text-center
              hover:shadow-2xl
              transition-all duration-300
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
              {program.icon}
            </motion.div>

            {/* Titre */}
            <h3 className="text-xl font-semibold text-primary mb-2">
              {program.title}
            </h3>

            {/* Description */}
            <p className="text-primary/80">
              {program.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
