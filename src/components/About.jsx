// src/components/About.jsx
import { motion } from "framer-motion";
import { FaGlobe, FaHandshake, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Section About - 100% responsive
 * Mobile-first → Tablet → Desktop → Large screens
 */
const About = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <FaGlobe />,
      title: t("about.internationalMobility.title"),
      description: t("about.internationalMobility.description"),
    },
    {
      icon: <FaHandshake />,
      title: t("about.trustedPartner.title"),
      description: t("about.trustedPartner.description"),
    },
    {
      icon: <FaStar />,
      title: t("about.excellenceGuidance.title"),
      description: t("about.excellenceGuidance.description"),
    },
  ];

  return (
    <section
      id="about"
      aria-label="Pourquoi choisir PI TRAVEL"
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        py-14 sm:py-16 lg:py-20
      "
    >
      {/* ================= Title ================= */}
      <motion.h2
        className="
          text-2xl sm:text-3xl md:text-4xl
          font-bold text-primary
          text-center mb-4
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {t("about.title")}
      </motion.h2>

      {/* ================= Description ================= */}
      <motion.p
        className="
          text-sm sm:text-base md:text-lg
          text-primary/80
          text-center
          max-w-xl md:max-w-3xl
          mx-auto
          mb-10 sm:mb-12
        "
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t("about.description")}
      </motion.p>

      {/* ================= Cards ================= */}
      <div
        className="
          grid gap-6 sm:gap-8
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="
              bg-light
              rounded-2xl
              p-6 sm:p-7
              shadow-md hover:shadow-xl
              flex flex-col items-center
              text-center
              transition-all
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 100
            }}
          >
            {/* Icon */}
            <motion.div
              className="
                mb-4
                text-secondary
                text-3xl sm:text-4xl
              "
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {card.icon}
            </motion.div>

            {/* Card title */}
            <h3
              className="
                text-base sm:text-lg md:text-xl
                font-semibold text-primary
                mb-2
              "
            >
              {card.title}
            </h3>

            {/* Card description */}
            <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
