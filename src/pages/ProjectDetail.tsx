import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import data from '../data.json';
import styles from './ProjectDetail.module.css';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = data.portfolio.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project Not Found</h1>
        <Link to="/portfolio" className={styles.backLink}>Return to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <header className={styles.header}>
        <div className="container">
          <Link to="/portfolio" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Works
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.titleWrapper}
          >
            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Category</span>
                <span className={styles.metaValue}>{project.category}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Year</span>
                <span className={styles.metaValue}>{project.year}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section className={styles.descriptionSection}>
        <div className="container">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={styles.description}
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.gallery}>
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className={styles.imageWrapper}
              >
                <img src={img} alt={`${project.title} gallery ${i + 1}`} className={styles.image} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: '100px' }} />
    </div>
  );
}
