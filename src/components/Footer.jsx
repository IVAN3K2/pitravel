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

/**
 * Footer responsive
 * Mobile-first → tablette → desktop
 * Animation fluide sur les icônes sociales
 */
const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Animation séquentielle pour chaque icône
  const iconVariants = {
    animate: (index) => ({
      y: [0, -8, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
        delay: index * 0.3,
      },
    }),
  };

  const socialLinks = [
    {
      icon: <FaWhatsapp size={20} />,
      href: "https://wa.me/682049276",
      label: "WhatsApp 1",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:pi87travel@gmail.com",
      label: "Email",
    },
    { icon: <FaFacebookF size={20} />, href: "#", label: "Facebook" },
    { icon: <FaInstagram size={20} />, href: "#", label: "Instagram" },
    { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-light text-primary py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <a
            href="#home"
            className="flex items-center justify-center md:justify-start gap-2 font-bold text-xl"
          >
            <img src="/logo.png" alt="PI TRAVEL Logo" className="h-10 w-auto" />
            PI TRAVEL
          </a>
          <p className="text-primary/80 text-sm sm:text-base">
            {t("footer.description")}
          </p>
        </div>

        {/* Liens rapides */}
        <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
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

        {/* Contacts & Réseaux */}
        <div className="flex-1 flex flex-col gap-3 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">
            {t("footer.contacts")}
          </h3>

          {/* Contacts texte AVEC ICONS */}
          <div className="flex flex-col gap-2 text-sm items-center md:items-start">
            <a
              href="https://wa.me/237682049276"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition"
            >
              <FaWhatsapp />
              +237 6 82 04 92 76
            </a>

            <a
              href="https://wa.me/237652427807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition"
            >
              <FaWhatsapp />
              +237 6 52 42 78 07
            </a>

            <a
              href="mailto:pi87travel@gmail.com"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition"
            >
              <FaEnvelope />
              pi87travel@gmail.com
            </a>
          </div>


          {/* Icônes animées */}
          <ul className="flex justify-center md:justify-start gap-4 mt-3">
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

      <motion.div
        className="mt-8 md:mt-12 text-center text-primary/60 text-xs sm:text-sm"
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
