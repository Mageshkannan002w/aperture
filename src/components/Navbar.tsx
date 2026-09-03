import { Link } from 'react-router-dom';
import { Aperture } from 'lucide-react';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/" className={styles.brand}>
          <span className={styles.name}>August Renner</span>
          <span className={styles.title}>Photographer</span>
        </Link>
      </div>
      
      <div className={styles.center}>
        <Link to="/" className={styles.logo}>
          <Aperture size={24} />
        </Link>
      </div>
      
      <div className={styles.right}>
        <Link to="/contact" className={styles.contactBtn}>
          Contact
        </Link>
      </div>
      
      {/* Floating Dock Navigation */}
      <div className={styles.dockWrapper}>
        <div className={styles.dock}>
          <Link to="/" className={styles.dockItem}>Home</Link>
          <Link to="/portfolio" className={styles.dockItem}>Portfolio</Link>
          <Link to="/about" className={styles.dockItem}>About</Link>
        </div>
      </div>
    </nav>
  );
}
