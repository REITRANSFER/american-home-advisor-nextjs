'use client';

import { useSurvey } from '@/context/SurveyContext';
import { formatPrice } from '@/lib/validation';
import styles from '../SurveyModal.module.css';

export default function PriceStep() {
  const { goBack, formData, setField, continueToNext } = useSurvey();

  function handleContinue() {
    if (!formData.askingPrice?.trim()) {
      alert('Please enter an asking price or estimated value.');
      return;
    }
    continueToNext();
  }

  return (
    <div>
      <button className={styles.backButton} onClick={goBack}>&#8592; Back</button>
      <h2 className={styles.stepTitle}>What&apos;s your asking price or estimated value?</h2>
      <div className={styles.priceWrap}>
        <span className={styles.pricePrefix}>$</span>
        <input
          type="text"
          className={`${styles.inputField} ${styles.priceInput}`}
          placeholder="300,000"
          value={formData.askingPrice || ''}
          onChange={(e) => setField('askingPrice', formatPrice(e.target.value))}
          inputMode="numeric"
        />
      </div>
      <button className={styles.continueButton} onClick={handleContinue}>
        Continue &#8594;
      </button>
    </div>
  );
}
