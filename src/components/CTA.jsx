// src/components/CTA.jsx
import { motion } from "framer-motion";
import Button from "./Button";
import { FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Section CTA - ultra responsive
 * Mobile-first → Tablet → Desktop
 */
const CTA = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="
        bg-secondary text-light
        w-full
        py-14 sm:py-16 lg:py-20
        px-4 sm:px-6 lg:px-8
        flex items-center justify-center
      "
      aria-label="Contact PI TRAVEL"
    >
      {/* Conteneur centré */}
      <div className="max-w-3xl w-full text-center flex flex-col items-center">
        {/* ================= Titre ================= */}
        <motion.h2
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-bold
            mb-4
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t("cta.title")}
        </motion.h2>

        {/* ================= Sous-titre ================= */}
        <motion.p
          className="
            text-base sm:text-lg md:text-xl
            mb-8
            max-w-xl
            leading-relaxed
            opacity-90
          "
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {t("cta.subtitle")}
        </motion.p>

        {/* ================= Bouton CTA ================= */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <Button
            href="https://wa.me/682049276"
            target="_blank"
            variant="secondary"
            className="
              flex items-center gap-3
              px-6 sm:px-8
              py-3 sm:py-4
              text-base sm:text-lg
              rounded-full
            "
          >
            {/* Icône animée */}
            <motion.span
              className="text-lg sm:text-xl"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaPaperPlane />
            </motion.span>

            {t("cta.button")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
