import styles from '../SurveyModal.module.css';

export default function SuccessStep() {
  return (
    <div className={styles.resultMessage}>
      <div className={styles.resultIcon}>&#9989;</div>
      <h3>You&apos;re all set!</h3>
      <p>
        We&apos;ll call you within 24 hours with a real offer. No obligation, no pressure.
        <br /><br />
        Questions? Call us directly: <strong><a href="tel:(443) 407-8421" style={{ color: '#1a3d6b', textDecoration: 'none' }}>(443) 407-8421</a></strong>
      </p>
    </div>
  );
}
