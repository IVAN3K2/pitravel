// src/components/Stats.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

/**
 * Section Stats globale pour PI TRAVEL
 * Animations fluides, centrée et responsive
 */
const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t("stats.visa"), value: 102 },
    { label: t("stats.students"), value: 62 },
    { label: t("stats.destinations"), value: 12 },
  ];

  return (
    <section
      aria-label={t("stats.sectionLabel")}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8"
    >
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-light rounded-2xl p-6 sm:p-8 shadow-md w-48 sm:w-56"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
              +{stat.value}
            </span>
            <span className="text-sm sm:text-base text-primary/80 mt-2 text-center">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
