import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import logo from "../../assets/icons/nav-logo.svg";
import logoTitle from "../../assets/icons/logo-title.svg";
import cartIcon from "../../assets/icons/cart.svg";
import search from "../../assets/icons/search.svg";

interface NavLinkModel {
  title: string;
  id: string;
}

const NavBar: React.FC = () => {
  const links: NavLinkModel[] = [
    { title: "Главная", id: "main" },
    { title: "Меню", id: "menu" },
    { title: "О компании", id: "about" },
    { title: "Контакты", id: "contacts" },
  ];

  const [language, setLanguage] = useState("ru");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    localStorage.setItem("language", selectedLang);
  };

  return (
    <motion.nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`${styles.content} container`}>
        <a href="#!">
          <img src={logo} alt="nav-logo" loading="lazy" />
          <img src={logoTitle} alt="nav-logo" loading="lazy" />
        </a>

        <ul>
          {links.map((link) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </ul>

        <div className={styles.options}>
          <motion.select
            name="language"
            id="language"
            className={styles.language}
            value={language}
            onChange={handleChangeLanguage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <option value="ru">Русский</option>
            <option value="uz">O‘zbekcha</option>
          </motion.select>

          <motion.button
            className={styles.cartButton}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <img src={cartIcon} alt="Корзина" />
          </motion.button>
          <motion.button
            className={styles.cartButton}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <img src={search} alt="Поиск" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
