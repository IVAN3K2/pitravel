// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Animation répétée pour les icônes sociales
  const iconAnimation = {
    y: [0, -6, 0], // micro mouvement vertical
    transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }, // 1s et infini
  };

  return (
    <footer className="bg-light text-primary py-12 px-6">
      {/* ================= Conteneur principal ================= */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* ================= Logo et description ================= */}
        <div className="flex-1 flex flex-col gap-4">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl">
            <img src="/logo.png" alt="PI TRAVEL Logo" className="h-10 w-auto" />
            PI TRAVEL
          </a>
          <p className="text-primary/80">
            {t("footer.description")}
          </p>
        </div>

        {/* ================= Liens rapides ================= */}
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">{t("footer.linksTitle")}</h3>
          <ul className="flex flex-col gap-1">
            <li><a href="#home" className="hover:text-secondary transition">{t("navbar.home")}</a></li>
            <li><a href="#about" className="hover:text-secondary transition">{t("navbar.about")}</a></li>
            <li><a href="#programs" className="hover:text-secondary transition">{t("navbar.programs")}</a></li>
            <li><a href="#destinations" className="hover:text-secondary transition">{t("navbar.destinations")}</a></li>
            <li><a href="#process" className="hover:text-secondary transition">{t("navbar.process")}</a></li>
          </ul>
        </div>

        {/* ================= Réseaux sociaux ================= */}
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">{t("footer.contacts")}</h3>
          <ul className="flex flex-row gap-4">
            <motion.li animate={iconAnimation}>
              <a href="https://wa.me/682049276" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                <FaWhatsapp size={20} />
              </a>
            </motion.li>
            <motion.li animate={iconAnimation}>
              <a href="mailto:contact@pitravel.com" className="hover:text-secondary transition">
                <FaEnvelope size={20} />
              </a>
            </motion.li>
            <motion.li animate={iconAnimation}>
              <a href="#" className="hover:text-secondary transition">
                <FaFacebookF size={20} />
              </a>
            </motion.li>
            <motion.li animate={iconAnimation}>
              <a href="#" className="hover:text-secondary transition">
                <FaInstagram size={20} />
              </a>
            </motion.li>
            <motion.li animate={iconAnimation}>
              <a href="#" className="hover:text-secondary transition">
                <FaLinkedin size={20} />
              </a>
            </motion.li>
          </ul>
        </div>
      </motion.div>

      {/* ================= Copyright ================= */}
      <motion.div
        className="mt-12 text-center text-primary/60 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        &copy; {currentYear} PI TRAVEL. {t("footer.rights")}
      </motion.div>
    </footer>
  );
};

export default Footer;
