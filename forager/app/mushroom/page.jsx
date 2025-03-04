'use client';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { useSearchParams } from 'next/navigation'; 
import MushroomCard from '@/components/Mushroom'; 
import { useEffect, useState } from 'react'; 
import Message from '@/components/Message'; 
import mushroomDataJson from '../../data/Mushrooms'; 

export default function MushroomPage() {
  const searchParams = useSearchParams(); 
  const [mushroomData, setMushroomData] = useState(null);
  const [showMessage, setShowMessage] = useState(false); 
  const [filteredMushrooms, setFilteredMushrooms] = useState([]); 

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedMushroomPage');

    if (!hasVisited) {
      setShowMessage(true);
      localStorage.setItem('hasVisitedMushroomPage', 'true');
    }
  }, []); // This effect only runs once

  useEffect(() => {
    const mushroomParam = searchParams.get('mushroom'); 
    if (mushroomParam) {
      try {
        const mushroomDataParsed = JSON.parse(mushroomParam);
        setMushroomData(mushroomDataParsed);
      } catch (error) {
        console.error('Error parsing mushroom data:', error);
        setMushroomData(null);
      }
    } else {
      setMushroomData(null);
    }
  }, [searchParams]); // Run when searchParams change

  useEffect(() => {
    if (mushroomDataJson && mushroomDataJson.mushroomCards) {
      if (mushroomData) {
        const filteredMushrooms = mushroomDataJson.mushroomCards.filter(
          (mushroomCard) => mushroomCard.name !== mushroomData.name
        );
        setFilteredMushrooms(filteredMushrooms);
      } else {
        setFilteredMushrooms(mushroomDataJson.mushroomCards); // Show all if no mushroom is selected
      }
    }
  }, [mushroomDataJson, mushroomData]); // Now depend on both mushroomDataJson and mushroomData

  return (
    <div className="page relative">
      <NavBar />
      {showMessage && <Message />} 
      {mushroomData ? (
        <div>
          <h2>Selected Mushroom</h2>
          <Link href="/comparison" className="flex items-center mb-4">
            <img src={mushroomData.image} alt={mushroomData.name} className="w-16 h-16 mr-2" />
            <span>comparison &gt;</span>
          </Link>
          <MushroomCard mushroom={mushroomData} card={false} />
        </div>
      ) : (
        <p>No mushroom data selected.</p>
      )}

      <div className="grid grid-cols-2 gap-4 mt-3">
        {filteredMushrooms.map((mushroom, index) => (
          <div key={index} style={{ cursor: 'pointer' }}>
            <MushroomCard 
              mushroom={mushroom} 
              card={true} 
              style={{ width: '134px', height: '169px' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
