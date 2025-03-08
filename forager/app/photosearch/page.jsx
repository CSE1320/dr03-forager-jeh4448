import NavBar from '../../components/NavBar';
import BackgroundScreen from '@/components/BackgroundScreen';
import Link from 'next/link';
import styles from '../../styles/Photosearch.module.css'; // Adjust to use CSS module
import mushroomData from "../../data/testMushroom"; 

export default function PhotoSearchPage() {
  // Stringify the mushroom data to pass it as a query parameter
  const mushroomDataString = encodeURIComponent(JSON.stringify(mushroomData));

  return (
    <div className={styles.page}>
      <Link href={`/mushroom?mushroom=${mushroomDataString}`} passHref>
          {/* <button className={styles.circleButton} aria-label="Go to mushroom">
          </button> */}
          <BackgroundScreen />
        </Link>
      
      <div className={styles.buttonContainer}>
        <Link href="/dashboard" passHref>
          <button className={styles.backButton} aria-label="Go to Dashboard">
            &lt; Back
          </button>
        </Link>
      </div>
      {/* <div className={styles.circleContainer}>
      </div> */}
    </div>
  );
}