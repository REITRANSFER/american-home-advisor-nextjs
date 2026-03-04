'use client';

import { useState, useEffect } from 'react';
import styles from './StickyBar.module.css';
import AddressInput from '../AddressInput/AddressInput';
import { useSurvey } from '../../context/SurveyContext';

export default function StickyBar({ triggerElementId = null, scrollThreshold = 300 }) {
  const [visible, setVisible] = useState(false);
  const [address, setAddress] = useState('');
  const { openSurvey } = useSurvey();

  useEffect(() => {
    function handleScroll() {
      if (triggerElementId) {
        const el = document.getElementById(triggerElementId);
        if (el) {
          const rect = el.getBoundingClientRect();
          setVisible(rect.bottom < 0);
          return;
        }
      }
      setVisible(window.scrollY > scrollThreshold);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerElementId, scrollThreshold]);

  function handleSubmit() {
    if (!address.trim()) return;
    openSurvey(address);
  }

  function handleAddressSelect(addr) {
    setAddress(addr);
    setTimeout(() => openSurvey(addr), 200);
  }

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ''}`}>
      <div className={styles.content}>
        <span className={styles.label}>Get Your Offer:</span>
        <AddressInput
          id="stickyAddress"
          placeholder="Enter property address..."
          value={address}
          onChange={setAddress}
          onAddressSelect={handleAddressSelect}
          inputClassName={styles.input}
        />
        <button className={styles.button} onClick={handleSubmit}>
          Get Offer &#8594;
        </button>
      </div>
    </div>
  );
}
