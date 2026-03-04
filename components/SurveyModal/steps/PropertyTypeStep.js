'use client';

import { useSurvey } from '../../../context/SurveyContext';
import styles from '../SurveyModal.module.css';

export default function PropertyTypeStep() {
  const { goBack, selectOption, disqualify, currentStepIndex } = useSurvey();

  return (
    <div>
      {currentStepIndex > 0 && (
        <button className={styles.backButton} onClick={goBack}>&#8592; Back</button>
      )}
      <h2 className={styles.stepTitle}>What type of property is it?</h2>
      <div className={styles.buttonGroup}>
        <button className={styles.optionButton} onClick={() => selectOption('propertyType', 'Single Family')}>
          &#127968; Single Family Home
        </button>
        <button className={styles.optionButton} onClick={() => selectOption('propertyType', 'Multi-Family')}>
          &#127960; Multi-Family (2-4 units)
        </button>
        <button className={styles.optionButton} onClick={() => selectOption('propertyType', 'Condo/Townhouse')}>
          &#127970; Condo or Townhouse
        </button>
        <button className={styles.optionButton} onClick={() => disqualify('propertyType', 'Land/Commercial/Mobile')}>
          &#128683; Land, Commercial, or Mobile Home
        </button>
      </div>
    </div>
  );
}
