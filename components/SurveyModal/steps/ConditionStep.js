'use client';

import { useSurvey } from '../../../context/SurveyContext';
import styles from '../SurveyModal.module.css';

export default function ConditionStep() {
  const { goBack, selectOption } = useSurvey();

  return (
    <div>
      <button className={styles.backButton} onClick={goBack}>&#8592; Back</button>
      <h2 className={styles.stepTitle}>What&apos;s the condition of the home?</h2>
      <div className={styles.conditionGrid}>
        <button className={styles.conditionCard} onClick={() => selectOption('condition', 'Move-in ready')}>
          <div className={styles.conditionIcon}>&#127969;</div>
          <div className={styles.conditionLabel}>Move-in Ready</div>
          <div className={styles.conditionSub}>No major repairs needed</div>
        </button>
        <button className={styles.conditionCard} onClick={() => selectOption('condition', 'Minor repairs')}>
          <div className={styles.conditionIcon}>&#128295;</div>
          <div className={styles.conditionLabel}>Minor Repairs</div>
          <div className={styles.conditionSub}>Some updating needed</div>
        </button>
        <button className={styles.conditionCard} onClick={() => selectOption('condition', 'Major repairs')}>
          <div className={styles.conditionIcon}>&#127962;</div>
          <div className={styles.conditionLabel}>Major Repairs</div>
          <div className={styles.conditionSub}>Significant work needed</div>
        </button>
        <button className={styles.conditionCard} onClick={() => selectOption('condition', 'Severe damage')}>
          <div className={styles.conditionIcon}>&#9888;&#65039;</div>
          <div className={styles.conditionLabel}>Severe Damage</div>
          <div className={styles.conditionSub}>Fire, flood, or structural</div>
        </button>
      </div>
    </div>
  );
}
