'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function ThankYou() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <div className={styles.pageWrap}>
      <div className={styles.confirmCard}>
        <div className={styles.checkIcon}>&#10003;</div>
        <h1>We&apos;re On It! Your Cash Offer is Coming Within 24 Hours.</h1>
        <p className={styles.lead}>
          The American Home Advisor team has received your information and is reviewing your property now.
        </p>
        <div className={styles.nextSteps}>
          <h3>What Happens Next:</h3>
          <ul>
            <li>We&apos;ll review comparable sales in your area</li>
            <li>We&apos;ll prepare a REAL cash offer, no bait-and-switch</li>
            <li>You&apos;ll receive our offer within 24 hours via email and phone</li>
            <li>Our number won&apos;t change after &quot;inspection&quot;, we mean what we say</li>
          </ul>
        </div>
        <p className={styles.phoneCta}>
          Questions? Call us at <a href="tel:(443) 407-8421">(443) 407-8421</a> &nbsp;|&nbsp; American Home Advisor &#8226; Serving Maryland since 2018
        </p>
      </div>

      <div className={styles.infoCard}>
        <div className={styles.infoBox}>
          <h3>While You Wait:</h3>
          <ul>
            <li>Check your email for a confirmation from our team</li>
            <li>Gather any documents related to your property (mortgage statements, tax records, repair estimates)</li>
            <li>Think about your ideal timeline, we&apos;ll work around YOUR schedule</li>
            <li>Save our number: <a href="tel:(443) 407-8421">(443) 407-8421</a>, call or text anytime</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
