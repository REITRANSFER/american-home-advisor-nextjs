import styles from './FooterLinks.module.css';
import Image from 'next/image';

export default function FooterLinks() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image
            src="/images/express-homebuyers-logo.png"
            alt="Express Homebuyers"
            width={180}
            height={50}
            className={styles.logo}
          />
        </div>
        
        <div className={styles.links}>
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
          <span className={styles.divider}>|</span>
          <a href="/terms" className={styles.link}>Terms of Service</a>
          <span className={styles.divider}>|</span>
          <a href="/contact" className={styles.link}>Contact Us</a>
        </div>
        
        <p className={styles.disclaimer}>
          American Home Advisor operates in Maryland. Licensed and insured. 
          This page does not constitute an offer to purchase real estate.
        </p>
        
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} American Home Advisor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
