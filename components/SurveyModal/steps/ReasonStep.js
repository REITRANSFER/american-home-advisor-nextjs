'use client';

import { useSurvey } from '@/context/SurveyContext';
import styles from '../SurveyModal.module.css';

export default function ReasonStep() {
  const { goBack, selectOption, reasonOptions } = useSurvey();

  return (
    <div>
      <button className={styles.backButton} onClick={goBack}>&#8592; Back</button>
      <h2 className={styles.stepTitle}>What&apos;s your primary reason for selling?</h2>
      <div className={styles.buttonGroup}>
        {reasonOptions.map((opt) => (
          <button
            key={opt.value}
            className={styles.optionButton}
            onClick={() => selectOption('reason', opt.value)}
          >
            {opt.emoji} {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
