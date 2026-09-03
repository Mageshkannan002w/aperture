import { motion } from 'framer-motion';
import { LensFrame } from '../components/LensFrame';
import data from '../data.json';
import styles from './About.module.css';

export function About() {
  const { about } = data;

  return (
    <div className={styles.aboutContainer}>
      <div className="container">
        
        <header className={styles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            About Me
          </motion.h1>
        </header>

        <section className={styles.contentSection}>
          <div className={styles.imageCol}>
            <LensFrame className={styles.frameWrapper}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={styles.imageWrapper}
              >
                <img src={about.portraitImage} alt="Portrait" className={styles.image} />
              </motion.div>
            </LensFrame>
          </div>
          
          <div className={styles.textCol}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className={styles.greeting}>Hello.</h2>
              <p className={styles.bio}>{about.bio}</p>
              
              <div className={styles.quoteBlock}>
                <p className={styles.quote}>"{about.clientQuote.quote}"</p>
                <span className={styles.author}>— {about.clientQuote.author}</span>
              </div>
              
              <div className={styles.gearBlock}>
                <h3>Selected Gear</h3>
                <ul className={styles.gearList}>
                  {about.gear.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
        
      </div>
      {/* Spacer for bottom dock */}
      <div style={{ height: '100px' }} />
    </div>
  );
}
