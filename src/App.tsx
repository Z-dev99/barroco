import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./widgets/Loader/Loader";
import NavBar from "./widgets/NavBar/NavBar";
import Header from "./widgets/Header/Header";
import Main from "./widgets/Main/Main";
import Footer from "./widgets/Footer/Footer";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const waitForFonts = async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
      } catch (error) {
        console.warn("Ошибка при ожидании загрузки шрифтов:", error);
      } finally {
        setLoading(false);
      }
    };

    waitForFonts();
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <NavBar />
          <Header />
          <Main />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
