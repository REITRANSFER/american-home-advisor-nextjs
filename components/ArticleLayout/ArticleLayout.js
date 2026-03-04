import styles from './ArticleLayout.module.css';

export default function ArticleLayout({ children }) {
  return (
    <article className={styles.article}>
      <div className={styles.articleContent}>
        {children}
      </div>
    </article>
  );
}
