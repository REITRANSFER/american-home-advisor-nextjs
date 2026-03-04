import styles from '../SurveyModal.module.css';

export default function DisqualifiedStep() {
  return (
    <div className={styles.resultMessage}>
      <div className={styles.resultIcon}>&#128222;</div>
      <h3>We may still be able to help.</h3>
      <p>
        Our team specializes in unique situations. Call us directly and we&apos;ll tell you honestly what your options are.
        <br /><br />
        <strong><a href="tel:(443) 407-8421" style={{ color: '#1a3d6b', textDecoration: 'none' }}>(443) 407-8421</a></strong>
      </p>
    </div>
  );
}
