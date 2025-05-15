import styles from './style.module.scss';
import { motion } from 'framer-motion';
import logo from '../../assets/icons/nav-logo.svg';
const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
};

const About: React.FC = () => {
    return (
        <section className={styles.about}>
            <img src={logo} alt="" />
            <motion.div
                className={styles.content}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={textVariants}
            >
                <h2 className={styles.heading}>Наша миссия</h2>
                <p>
                    Мы создаем больше, чем просто шоколад — мы предлагаем искусство вкуса,
                    воплощенное в безупречном качестве и продуманных подарочных решениях для
                    особого случая.
                </p>
                <p>
                    <strong>Barroco</strong> — это бренд для тех, кто ценит красоту во всем: в деталях,
                    традициях и мастерстве. Наша цель — подарить жителям Ташкента мир
                    утонченного вкуса, объединяя европейские кондитерские традиции с
                    современным взглядом и национальной традицией.
                </p>
                <p>
                    Мы обращаемся к женщине, которая уверенно идет по жизни, обладает
                    безупречным вкусом, ценит искусство, элегантность и стремится выбирать
                    только лучшее. <strong>Barroco</strong> — это выбор тех, кто понимает, что качество и
                    внимание к деталям делают каждое мгновение особенным.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
