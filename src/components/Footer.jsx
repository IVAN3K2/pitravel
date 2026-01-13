// src/components/Footer.jsx
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  /**
   * Variants pour animation séquentielle des icônes
   * Chaque icône monte puis redescend
   */
  const iconVariants = {
    animate: (index) => ({
      y: [0, -8, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,      // pause entre les cycles
        delay: index *0.3,  // décalage entre les icônes
      },
    }),
  };

  // Liste des réseaux (plus propre et scalable)
  const socialLinks = [
    {
      icon: <FaWhatsapp size={20} />,
      href: "https://wa.me/682049276",
      label: "WhatsApp",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:pi87travel@gmail.com",
      label: "Email",
    },
    {
      icon: <FaFacebookF size={20} />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "#",
      label: "LinkedIn",
    },
  ];

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
        {/* ================= Logo & description ================= */}
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
          <h3 className="font-semibold text-lg mb-2">
            {t("footer.linksTitle")}
          </h3>
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
          <h3 className="font-semibold text-lg mb-2">
            {t("footer.contacts")}
          </h3>

          <ul className="flex flex-row gap-4">
            {socialLinks.map((social, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={iconVariants}
                animate="animate"
                className="hover:text-secondary transition"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </motion.li>
            ))}
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
