import { motion } from "framer-motion";
import styles from "./style.module.scss";
import video from "../../assets/video/bg.mp4";
import logo from "../../assets/icons/logo-title.svg";
import { useEffect } from "react";

const Header: React.FC = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = video;
    link.type = "video/mp4";
    document.head.appendChild(link);
  }, []);

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.video
        key={video}
        src={video}
        autoPlay
        muted
        loop
        preload="auto"
        className={styles.video}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <motion.div
        className={styles.content}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.img
          src={logo + "?v=1"}
          alt="logo"
          className={styles.logo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Barroco - это произведения высокого кондитерского искусства.
          <br />
          Люкс-бутик десертов ручной работы. <br />
          Сладкие без сахара.
        </motion.p>

        <motion.button
          className={styles.button}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Подробнее
        </motion.button>
      </motion.div>
    </motion.header>
  );
};

export default Header;
