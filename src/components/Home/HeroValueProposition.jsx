import { motion } from "framer-motion";

const HeroValueProposition = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.6,
      }}
      className="z-10 static font-sans lg:absolute lg:left-8 lg:bottom-24 max-w-sm"
    >
      <p className="text-f-primary leading-relaxed">
        I help stakeholders translate business, and technical complexity into digital clarity
        without wasting resources on misaligned features.
      </p>
    </motion.div>
  );
};

export default HeroValueProposition;
