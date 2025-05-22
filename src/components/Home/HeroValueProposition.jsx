import { motion } from "framer-motion";

const HeroValueProposition = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { x: -20, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.6,
            ease: [0.33, 1, 0.68, 1],
          },
        },
      }}
      viewport={{ once: true, amount: 0.4 }}
      className="z-10 static font-sans lg:absolute lg:left-8 lg:bottom-10 max-w-sm"
    >
      <p className="text-f-primary leading-relaxed">
        I work at the intersection of research, design and development, what I
        like to call the sweet spot of UX.
      </p>
    </motion.div>
  );
};

export default HeroValueProposition;
