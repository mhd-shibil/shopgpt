import { motion } from "framer-motion";
import Card from "../card/Card";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const List = ({ cards, handleTry }) => (
  <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    <div className="flex gap-2 flex-wrap">
      {cards.map((card, index) => (
        <motion.li key={index} className="item" variants={item}>
          <Card details={card} handleTry={handleTry} />
        </motion.li>
      ))}
    </div>
  </motion.ul>
);
