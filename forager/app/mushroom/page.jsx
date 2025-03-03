'use client'
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams from next/navigation
import MushroomCard from '@/components/Mushroom'; // Import MushroomCard if you want to use it to display the mushroom
import { useEffect, useState } from 'react'; // Import useEffect and useState
import Message from '@/components/Message'; // Import the Message component

export default function MushroomPage() {
  const searchParams = useSearchParams(); // Get searchParams instance
  const mushroom = searchParams.get('mushroom'); // Access the query parameter

  // Parse the mushroom data from the query string
  const mushroomData = mushroom ? JSON.parse(mushroom) : null;

  const [showMessage, setShowMessage] = useState(false); // State to manage message visibility

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedMushroomPage');
    if (!hasVisited) {
      setShowMessage(true); // Show message if it's the first visit
      localStorage.setItem('hasVisitedMushroomPage', 'true'); // Set the flag in local storage
    }
  }, []);

  return (
    <div className="page relative">
      <NavBar />
      {showMessage && <Message />} {/* Render the Message component if showMessage is true */}
      {mushroomData ? (
        <div>
          <h2>Selected Mushroom</h2>
          {/* Link to the comparison page */}
          <Link href="/comparison" className="flex items-center mb-4">
            <img src={mushroomData.image} alt={mushroomData.name} className="w-16 h-16 mr-2" />
            <span>comparison &gt;</span>
          </Link>
          {/* Display mushroom data */}
          <MushroomCard mushroom={mushroomData} card={false} />
          {/* You can customize card prop to display it differently */}
        </div>
      ) : (
        <p>No mushroom data selected.</p>
      )}
    </div>
  );
}
