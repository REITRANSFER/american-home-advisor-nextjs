'use client';

import { useSurvey } from '../../../context/SurveyContext';
import styles from '../SurveyModal.module.css';

export default function ListedStep() {
  const { goBack, selectOption, disqualify } = useSurvey();

  return (
    <div>
      <button className={styles.backButton} onClick={goBack}>&#8592; Back</button>
      <h2 className={styles.stepTitle}>Is the property currently listed for sale?</h2>
      <p className={styles.hint}>Includes MLS listings, agent listings, and FSBO listings on Zillow or Realtor.com.</p>
      <div className={styles.buttonGroup}>
        <button className={styles.optionButton} onClick={() => selectOption('listed', 'No - not listed')}>
          &#10003; No - not currently listed anywhere
        </button>
        <button className={styles.optionButton} onClick={() => disqualify('listed', 'Listed with agent')}>
          &#10007; Yes - listed with an agent
        </button>
        <button className={styles.optionButton} onClick={() => disqualify('listed', 'Listed FSBO')}>
          &#10007; Yes - listed for sale by owner (FSBO)
        </button>
      </div>
    </div>
  );
}
