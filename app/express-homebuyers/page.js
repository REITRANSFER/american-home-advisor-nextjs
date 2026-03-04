'use client';

import styles from './page.module.css';
import { SurveyProvider, useSurvey } from '@/context/SurveyContext';
import { pageConfigs } from '@/lib/surveyConfig';
import SurveyModal from '@/components/SurveyModal/SurveyModal';
import SurveyCard from '@/components/SurveyCard/SurveyCard';
import VSLSection from '@/components/VSLSection/VSLSection';
import FooterLinks from '@/components/FooterLinks/FooterLinks';

function ExpressHomebuyersContent() {
  return (
    <>
      <main className={styles.main}>
        {/* Phone number at top */}
        <div className={styles.phoneBar}>
          <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          <a href="tel:8882984807" className={styles.phoneLink}>
            (888) 298-4807
          </a>
        </div>

        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Sell Your House Fast For Cash
            </h1>
            <p className={styles.heroSubtitle}>
              Get a fair cash offer in 24 hours. No fees, no repairs, no hassle. We buy houses in any condition.
            </p>
            
            {/* Trust indicators */}
            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className={styles.trustText}>No Fees</span>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className={styles.trustText}>No Repairs</span>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className={styles.trustText}>Close Fast</span>
              </div>
            </div>
          </div>

          {/* VSL Video Section */}
          <div className={styles.vslWrapper}>
            <VSLSection />
          </div>

          {/* Survey Form */}
          <div className={styles.surveyWrapper}>
            <SurveyCard />
          </div>
        </div>

        {/* Footer */}
        <FooterLinks />
      </main>
      <SurveyModal />
    </>
  );
}

export default function ExpressHomebuyersPage() {
  return (
    <SurveyProvider config={pageConfigs['express-homebuyers']}>
      <ExpressHomebuyersContent />
    </SurveyProvider>
  );
}
