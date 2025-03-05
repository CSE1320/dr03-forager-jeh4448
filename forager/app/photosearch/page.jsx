import NavBar from '../../components/NavBar';
import BackgroundScreen from '@/components/BackgroundScreen';
import Link from 'next/link';
import '../../styles/Photosearch.module.css'; // Create a CSS module or use inline styles

export default function PhotoSearchPage() {
  return (
    <div className="page">
      <BackgroundScreen />
      <Link href="/dashboard" passHref>
        <button className="backButton" aria-label="Go to Dashboard">
          &lt;
        </button>
      </Link>
    </div>
  );
}
