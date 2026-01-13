import { motion } from "framer-motion";
import clsx from "clsx";

/**
 * Button réutilisable PI TRAVEL
 *
 * props :
 * - children : texte / contenu
 * - href : lien (optionnel)
 * - onClick : action (optionnel)
 * - variant : "primary" | "outline"
 * - className : styles additionnels
 */
const Button = ({
  children,
  href,
  target,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold transition";

  const variants = {
    primary: "bg-secondary text-primary",
    secondary: "bg-light text-primary",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-light",
  };

  // ✅ Motion appliqué directement sur le composant
  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      target={target}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;
