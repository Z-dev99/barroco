import styles from "./style.module.scss";
import img from "../../assets/images/new/photo_2025-05-15_18-08-36.jpg";
import img1 from "../../assets/images/new/photo_2025-05-15_18-08-40 (2).jpg";
import img2 from "../../assets/images/new/photo_2025-05-15_18-08-40.jpg";
import img3 from "../../assets/images/new/photo_2025-05-15_18-08-40 (2).jpg";
import img4 from "../../assets/images/new/photo_2025-05-15_18-08-41.jpg"
import img5 from "../../assets/images/new/photo_2025-05-15_18-08-42 (2).jpg";
// 

import image from '../../assets/images/light/1.jpg';
import image1 from '../../assets/images/light/2.jpg';
import image2 from '../../assets/images/light/3.jpg';
import image3 from '../../assets/images/light/4.jpg';
import image4 from '../../assets/images/light/5.jpg';

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
  {
    id: 4,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: img3,
  },
  {
    id: 5,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: img4,
  },
  {
    id: 6,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: img5,
  },
  {
    id: 7,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: image,
  },
  {
    id: 8,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: image1,
  },
  {
    id: 9,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: image2,
  },
  {
    id: 10,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: image3,
  },
  {
    id: 11,
    title: "Печенька",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum?",
    price: "28 000 сум",
    image: image4,
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

const TopProducts: React.FC = () => {
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
        <h2>Топ продаж</h2>
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

export default TopProducts;
