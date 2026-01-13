// src/components/Destinations.jsx
import { motion } from "framer-motion";
import { FaPlane, FaLandmark, FaGlobeAmericas } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Section Destinations - ultra responsive
 * Mobile-first → Tablet → Desktop → Large screens
 */
const Destinations = () => {
  const { t } = useTranslation();

  const destinations = [
    {
      icon: <FaPlane />,
      title: t("destinations.europe.title"),
      description: t("destinations.europe.description"),
    },
    {
      icon: <FaLandmark />,
      title: t("destinations.americas.title"),
      description: t("destinations.americas.description"),
    },
    {
      icon: <FaGlobeAmericas />,
      title: t("destinations.asia.title"),
      description: t("destinations.asia.description"),
    },
  ];

  return (
    <section
      id="destinations"
      className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        py-14 sm:py-16 lg:py-20
      "
      aria-label="Destinations PI TRAVEL"
    >
      {/* ================= Title ================= */}
      <motion.h2
        className="
          text-2xl sm:text-3xl md:text-4xl
          font-bold text-primary
          text-center
          mb-10 sm:mb-12
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {t("destinations.title")}
      </motion.h2>

      {/* ================= Cards ================= */}
      <div
        className="
          grid gap-6 sm:gap-8
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            className="
              bg-light
              rounded-2xl
              p-6 sm:p-7
              shadow-md hover:shadow-xl
              flex flex-col items-center
              text-center
              transition-all duration-300
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
              {dest.icon}
            </motion.div>

            {/* Card title */}
            <h3
              className="
                text-base sm:text-lg md:text-xl
                font-semibold text-primary
                mb-2
              "
            >
              {dest.title}
            </h3>

            {/* Card description */}
            <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
              {dest.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
