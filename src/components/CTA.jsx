// src/components/CTA.jsx
import { motion } from "framer-motion";
import Button from "./Button";
import { FaPlane, FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Section CTA pour PI TRAVEL
 * Encourage les étudiants à entrer en contact ou postuler
 */
const CTA = () => {
  const { t } = useTranslation();

  // Lien WhatsApp avec numéro fourni
  const whatsappLink = "https://wa.me/682049276";

  return (
    <section
      id="contact"
      className="bg-secondary text-light py-16 px-6 flex flex-col items-center justify-center text-center"
    >
      {/* ================= Titre ================= */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {t("cta.title")}
      </motion.h2>

      {/* ================= Sous-titre ================= */}
      <motion.p
        className="text-lg md:text-xl mb-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("cta.subtitle")}
      </motion.p>

      {/* ================= Bouton WhatsApp ================= */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button
          href={whatsappLink}
          target="_blank"
          variant="secondary"
          className="gap-3"
        >
            <motion.span
                className="text-xl"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <FaPaperPlane />
            </motion.span>

            {t("cta.button")}
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;
