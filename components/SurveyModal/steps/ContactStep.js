'use client';

import { useState } from 'react';
import { useSurvey } from '../../../context/SurveyContext';
import { formatPhone, validateEmail, validatePhone } from '../../../lib/validation';
import styles from '../SurveyModal.module.css';

export default function ContactStep() {
  const { goBack, submitSurvey, status } = useSurvey();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [honeypot, setHoneypot] = useState('');

  async function handleSubmit() {
    if (honeypot) {
      window.location.href = '/thank-you';
      return;
    }
    if (!firstName.trim() || !validatePhone(phone)) {
      alert('Please enter your name and a valid 10-digit phone number.');
      return;
    }
    if (email && !validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    await submitSurvey({ firstName, lastName, email, phone });
  }

  return (
    <div>
      <button className={styles.backButton} onClick={goBack}>&#8592; Back</button>
      <h2 className={styles.stepTitle}>Where should we send your cash offer?</h2>
      <div className={styles.inputRow}>
        <div className={styles.iconInput}>
          <span>&#128100;</span>
          <input
            type="text"
            className={styles.inputField}
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ marginBottom: 0 }}
          />
        </div>
        <div className={styles.iconInput}>
          <span>&#128100;</span>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ marginBottom: 0 }}
          />
        </div>
      </div>
      <div className={styles.iconInput}>
        <span>&#9993;</span>
        <input
          type="email"
          className={styles.inputField}
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.iconInput}>
        <span>&#128241;</span>
        <input
          type="tel"
          className={styles.inputField}
          placeholder="(000) 000-0000"
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
        />
      </div>
      <div className={styles.honeypot} aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>
      <button
        className={styles.continueButton}
        onClick={handleSubmit}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting...' : 'Get My Cash Offer \u2192'}
      </button>
    </div>
  );
}
