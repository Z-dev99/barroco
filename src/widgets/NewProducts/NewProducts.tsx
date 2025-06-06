import styles from "./style.module.scss";
import img from "../../assets/images/products/4.jpg";
import img1 from "../../assets/images/products/5.jpg";
import img2 from "../../assets/images/products/6.jpg";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: img,
  },
  {
    id: 2,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: img1,
  },
  {
    id: 3,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: img2,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const NewProducts: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className={`${styles.content} container`}
        variants={containerVariants}
      >
        <h2>Новинки</h2>
        <div className={styles.items}>
          {products.map((product) => (
            <motion.div
              key={product.id}
              className={styles.item}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.itemImg}>
                <img src={product.image} alt="product" loading="lazy" />
              </div>
              {/* <h3>{product.title}</h3> */}
              {/* <p>{product.description}</p>
              <span>{product.price}</span> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default NewProducts;
