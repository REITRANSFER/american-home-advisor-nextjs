'use client';

import styles from './VSLSection.module.css';

export default function VSLSection() {
  return (
    <div className={styles.vslContainer}>
      <div className={styles.videoWrapper}>
        {/* Placeholder for video - replace src with actual video URL */}
        <div className={styles.videoPlaceholder}>
          <div className={styles.playButton}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className={styles.videoText}>Video Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
