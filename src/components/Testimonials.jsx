// src/components/Testimonials.jsx
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Section Testimonials pour PI TRAVEL
 * Affiche des avis clients/étudiants
 */
const Testimonials = () => {
  const { t } = useTranslation();

  // Données des témoignages
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
        {t("testimonials.title")}
      </motion.h2>

      {/* ================= Témoignages ================= */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {testimonials.map((tst, index) => (
          <motion.div
            key={index}
            className="bg-light rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-transform"
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
            {/* Icône de citation avec micro-parallax */}
            <motion.div
              className="text-secondary mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaQuoteLeft size={24} />
            </motion.div>

            {/* Feedback */}
            <p className="text-primary/80 mb-4">{tst.feedback}</p>

            {/* Avatar */}
            <div className="w-16 h-16 mb-2">
              <img
                src={tst.photo}
                alt={tst.name}
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>

            {/* Nom et rôle */}
            <h3 className="text-lg font-semibold text-primary">{tst.name}</h3>
            <p className="text-primary/70 text-sm">{tst.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
