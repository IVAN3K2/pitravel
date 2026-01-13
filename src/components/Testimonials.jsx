// src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Section Testimonials pour PI TRAVEL
 * Affiche des avis clients/étudiants
 */
const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Amina K.",
      role: t("testimonials.student"),
      photo: "9581121.png",
      feedback: t("testimonials.feedback1"),
    },
    {
      name: "Jean M.",
      role: t("testimonials.student"),
      photo: "9581121.png",
      feedback: t("testimonials.feedback2"),
    },
    {
      name: "Fatou B.",
      role: t("testimonials.student"),
      photo: "9581121.png",
      feedback: t("testimonials.feedback3"),
    },
  ];

  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center"
      aria-label="Témoignages étudiants"
    >
      {/* ================= Titre ================= */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {t("testimonials.title")}
      </motion.h2>

      {/* ================= Cartes témoignages ================= */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((tst, index) => (
          <motion.div
            key={index}
            className="
              bg-light rounded-xl p-6 shadow-lg
              flex flex-col items-center text-center
              hover:shadow-2xl
              transition-transform duration-300
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
            {/* Icône citation flottante */}
            <motion.div
              className="text-secondary mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaQuoteLeft size={24} />
            </motion.div>

            {/* Feedback */}
            <p className="text-primary/80 mb-4 text-sm sm:text-base md:text-sm lg:text-base">
              {tst.feedback}
            </p>

            {/* Avatar */}
            <div className="w-16 h-16 mb-2">
              <img
                src={tst.photo}
                alt={tst.name}
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>

            {/* Nom et rôle */}
            <h3 className="text-lg sm:text-xl font-semibold text-primary">
              {tst.name}
            </h3>
            <p className="text-primary/70 text-xs sm:text-sm">{tst.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
