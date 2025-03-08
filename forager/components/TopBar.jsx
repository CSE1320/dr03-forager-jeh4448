import Link from 'next/link';
import "../styles/globals.css";

export default function TopBar({ children, href }) {
  return (
    <div className="topbar">
      <div className="buttonContainer">
        <Link href={href} passHref>
          <button className="backButton" aria-label="Go to specified page">
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
