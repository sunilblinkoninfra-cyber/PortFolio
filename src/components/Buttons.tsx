import { motion } from "motion/react";

interface ContactButtonProps {
  className?: string;
}

export function ContactButton({ className = "" }: ContactButtonProps) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToContact}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full uppercase tracking-widest text-white font-medium 
      px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base
      relative overflow-hidden group hover:scale-105 transition-transform duration-300
      ${className}`}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
      id="contact-button"
    >
      <span className="relative z-10">Contact Me</span>
    </motion.button>
  );
}

interface LiveProjectButtonProps {
  className?: string;
}

export function LiveProjectButton({ className = "" }: LiveProjectButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "rgba(215, 226, 234, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest
      px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200
      ${className}`}
      id="live-project-button"
    >
      Live Project
    </motion.button>
  );
}
