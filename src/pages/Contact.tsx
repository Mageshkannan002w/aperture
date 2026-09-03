import { motion } from 'framer-motion';
import { LensFrame } from '../components/LensFrame';
import data from '../data.json';
import styles from './Contact.module.css';

export function Contact() {
  const { contact, siteMeta } = data;

  return (
    <div className={styles.contactContainer}>
      <div className="container">
        <header className={styles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Get in touch.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={styles.subtitle}
          >
            For commissions, print inquiries, or just to say hello.
          </motion.p>
        </header>

        <section className={styles.contentSection}>
          <LensFrame className={styles.frameWrapper}>
            <div className={styles.contactBox}>
              <div className={styles.infoGroup}>
                <h3>Email</h3>
                <a href={`mailto:${contact.email}`} className={styles.emailLink}>
                  {contact.email}
                </a>
              </div>
              
              <div className={styles.infoGroup}>
                <h3>Availability</h3>
                <p>{contact.availability}</p>
                <p className={styles.meta}>Typical response time: {contact.responseTime}</p>
              </div>

              <div className={styles.infoGroup}>
                <h3>Social</h3>
                <div className={styles.socialLinks}>
                  <a href={siteMeta.socialLinks.instagram} target="_blank" rel="noreferrer">Instagram</a>
                  <a href={siteMeta.socialLinks.twitter} target="_blank" rel="noreferrer">Twitter</a>
                  <a href={siteMeta.socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </LensFrame>
        </section>
      </div>
      <div style={{ height: '100px' }} />
    </div>
  );
}
