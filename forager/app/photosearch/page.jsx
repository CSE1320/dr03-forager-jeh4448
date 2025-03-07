import NavBar from '../../components/NavBar';
import BackgroundScreen from '@/components/BackgroundScreen';
import Link from 'next/link';
import styles from '../../styles/Photosearch.module.css'; // Adjust to use CSS module

export default function PhotoSearchPage() {
  return (
    <div className={styles.page}>
      <BackgroundScreen />
      <div className={styles.buttonContainer}>
        <Link href="/dashboard" passHref>
          <button className={styles.backButton} aria-label="Go to Dashboard">
            &lt; Back
          </button>
        </Link>
      </div>
      <div className={styles.circleContainer}>
        <Link href="/comparison" passHref>
          <button className={styles.circleButton} aria-label="Go to comparison">
          </button>
        </Link>
      </div>
    </div>
  );
}
