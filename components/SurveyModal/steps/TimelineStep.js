'use client';

import { useSurvey } from '@/context/SurveyContext';
import styles from '../SurveyModal.module.css';

export default function TimelineStep() {
  const { goBack, selectOption } = useSurvey();

  return (
    <div>
      <button className={styles.backButton} onClick={goBack}>&#8592; Back</button>
      <h2 className={styles.stepTitle}>When do you need to close?</h2>
      <div className={styles.buttonGroup}>
        <button className={styles.optionButton} onClick={() => selectOption('timeline', 'ASAP / within 7 days')}>
          &#9889; ASAP - within 7 days
        </button>
        <button className={styles.optionButton} onClick={() => selectOption('timeline', 'Within 30 days')}>
          &#128197; Within 30 days
        </button>
        <button className={styles.optionButton} onClick={() => selectOption('timeline', 'Within 60 days')}>
          &#128198; Within 60 days
        </button>
        <button className={styles.optionButton} onClick={() => selectOption('timeline', '3-6 months')}>
          &#128467; 3-6 months
        </button>
        <button className={styles.optionButton} onClick={() => selectOption('timeline', 'No rush')}>
          &#128336; No rush - just exploring
        </button>
      </div>
    </div>
  );
}
