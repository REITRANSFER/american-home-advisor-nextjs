'use client';

import { useState } from 'react';
import styles from './SurveyCard.module.css';
import { useSurvey } from '@/context/SurveyContext';
import AddressInput from '@/components/AddressInput/AddressInput';

export default function SurveyCard() {
  const { openSurvey } = useSurvey();
  const [address, setAddress] = useState('');

  function handleAddressSelect(addr) {
    setAddress(addr);
    setTimeout(() => openSurvey(addr), 200);
  }

  function handleSubmit() {
    if (address.trim()) {
      openSurvey(address);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Get Your Free Cash Offer</h2>
        <p className={styles.subtitle}>Enter your property address to get started</p>
      </div>
      
      <div className={styles.form}>
        <AddressInput
          id="surveyCardAddress"
          placeholder="Enter your property address..."
          value={address}
          onChange={setAddress}
          onAddressSelect={handleAddressSelect}
          inputClassName={styles.addressInput}
        />
        <button className={styles.submitButton} onClick={handleSubmit}>
          Get My Cash Offer
        </button>
      </div>

      <div className={styles.footer}>
        <div className={styles.trustItem}>
          <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>No Obligation</span>
        </div>
        <div className={styles.trustItem}>
          <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>24hr Response</span>
        </div>
      </div>
    </div>
  );
}
