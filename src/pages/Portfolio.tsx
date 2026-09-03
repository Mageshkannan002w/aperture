import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import data from '../data.json';
import styles from './Portfolio.module.css';

export function Portfolio() {
  const { portfolio } = data;

  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.header}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Selected Works
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={styles.subtitle}
          >
            A curated selection of recent commissions and personal projects.
          </motion.p>
        </div>
      </header>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.bentoGrid}>
            {portfolio.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={styles.projectCard}
              >
                <Link to={`/portfolio/${project.slug}`} className={styles.projectLink}>
                  <div className={styles.imageWrapper}>
                    <img src={project.thumbnail} alt={project.title} className={styles.projectImage} />
                    <div className={styles.overlay}>
                      <span className={styles.viewProject}>View Project</span>
                    </div>
                  </div>
                  <div className={styles.projectInfo}>
                    <div className={styles.projectMeta}>
                      <span className={styles.category}>{project.category}</span>
                      <span className={styles.year}>{project.year}</span>
                    </div>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer for bottom dock */}
      <div style={{ height: '100px' }} />
    </div>
  );
}
