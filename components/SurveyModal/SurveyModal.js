'use client';

import { useEffect, useRef } from 'react';
import styles from './SurveyModal.module.css';
import { useSurvey } from '@/context/SurveyContext';
import AddressStep from './steps/AddressStep';
import PropertyTypeStep from './steps/PropertyTypeStep';
import ConditionStep from './steps/ConditionStep';
import PriceStep from './steps/PriceStep';
import TimelineStep from './steps/TimelineStep';
import ReasonStep from './steps/ReasonStep';
import ListedStep from './steps/ListedStep';
import ContactStep from './steps/ContactStep';
import SuccessStep from './steps/SuccessStep';
import DisqualifiedStep from './steps/DisqualifiedStep';

const stepComponents = {
  address: AddressStep,
  propertyType: PropertyTypeStep,
  condition: ConditionStep,
  price: PriceStep,
  timeline: TimelineStep,
  reason: ReasonStep,
  listed: ListedStep,
  contact: ContactStep,
};

export default function SurveyModal() {
  const {
    isOpen,
    closeSurvey,
    currentStepName,
    currentStepIndex,
    progressPercent,
    status,
    stepOrder,
    totalSteps,
  } = useSurvey();
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (e.target === modalRef.current) closeSurvey();
    }
    if (isOpen) {
      window.addEventListener('click', handleClick);
      return () => window.removeEventListener('click', handleClick);
    }
  }, [isOpen, closeSurvey]);

  if (!isOpen) return null;

  const stepLabel = status === 'success' || status === 'disqualified'
    ? null
    : currentStepName === stepOrder[stepOrder.length - 1]
      ? 'Last Step'
      : `Step ${currentStepIndex + 1} of ${totalSteps}`;

  let StepComponent = null;
  if (status === 'success') {
    StepComponent = SuccessStep;
  } else if (status === 'disqualified') {
    StepComponent = DisqualifiedStep;
  } else {
    StepComponent = stepComponents[currentStepName];
  }

  return (
    <div className={styles.modal} ref={modalRef}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeSurvey}>&times;</span>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
        </div>
        <div className={styles.surveyContent}>
          {stepLabel && <div className={styles.stepNumber}>{stepLabel}</div>}
          {StepComponent && <StepComponent />}
        </div>
      </div>
    </div>
  );
}
