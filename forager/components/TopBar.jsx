import Link from 'next/link';
import "../styles/globals.css"

export default function TopBar({ children }) {
  return (
    <div className="topbar">
      <div className="buttonContainer">
        <Link href="/dashboard" passHref>
          <button className="backButton" aria-label="Go to Dashboard">
            &lt; 
          </button>
        </Link>
      </div>
      <div className="title-font">
        {children} {/* Render the children here */}
      </div>
    </div>
  );
}
