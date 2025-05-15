import { motion } from "framer-motion";
import styles from "./style.module.scss";
import logo from "../../assets/icons/logo.svg";

const Loader: React.FC = () => {
  return (
    <motion.div
      className={`${styles.loader}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={logo}
        alt="loader"
        width={300}
        height={170}
        loading="lazy"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
};

export default Loader;
