'use client';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { useSearchParams } from 'next/navigation'; 
import MushroomCard from '@/components/Mushroom'; 
import { useEffect, useState } from 'react'; 
import Message from '@/components/Message'; 
import mushroomDataJson from '../../data/Mushrooms'; 
import TopBar from '@/components/TopBar';
import ToxicMessage from '@/components/ToxicMessage';
import "../../styles/globals.css"
import MushroomMatch from '@/components/ComparisonPercentage';

export default function MushroomPage() {
  const searchParams = useSearchParams(); 
  const [mushroomData, setMushroomData] = useState(null);
  const [showMessage, setShowMessage] = useState(false); 
  const [filteredMushrooms, setFilteredMushrooms] = useState([]); 
  const [showToxicMessage, setShowToxicMessage] = useState(false); // New state for toxic message

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
        
        // Check if the selected mushroom is toxic
        if (mushroomData.features.is_toxic) {
          setShowToxicMessage(true);
        } else {
          setShowToxicMessage(false);
        }
      } else {
        setFilteredMushrooms(mushroomDataJson.mushroomCards); // Show all if no mushroom is selected
        setShowToxicMessage(false); // Reset toxic message
      }
    }
  }, [mushroomDataJson, mushroomData]); // Now depend on both mushroomDataJson and mushroomData

  return (
    <div className="page relative" style={{ backgroundColor: '#F2F2F2' }}>
      <TopBar>
        <h1>Match Results</h1> {/* You can pass in any content here */}
      </TopBar>
      <NavBar />
      {showMessage && <Message />} 
      {showToxicMessage && <div style={{ marginTop: '30px' }}><ToxicMessage /></div>} {/* Added marginTop to ToxicMessage */}
      
      <div style={{ marginTop: '20px' }}>
        {mushroomData ? (
          <div>
            <h2>Selected Mushroom</h2>
            <Link href="/comparison" className="flex items-center mb-4">
              <img src={mushroomData.image} alt={mushroomData.name} className="w-16 h-16 mr-2" />
              <span style={{ color: 'black' }}>comparison &gt;</span>
            </Link>
            <MushroomCard mushroom={mushroomData} card={false} />
            <div>
            <h1>Mushroom Comparison</h1>
            <MushroomMatch 
                baseMushroom={mushroomData} 
                compareMushroom={mushroomData} 
                card={true} 
            />
        </div>
          </div>
        ) : (
          <p>No mushroom data selected.</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-3">
        {filteredMushrooms.map((mushroom, index) => (
          <div key={index} style={{ cursor: 'pointer' }}>
            <MushroomCard 
              mushroom={mushroom} 
              card={true} 
              style={{ width: '134px', height: '169px' }} 
            />
            <div>
            <h1>Mushroom Comparison</h1>
            <MushroomMatch 
                baseMushroom={mushroomData} 
                compareMushroom={mushroom} 
                card={false} 
            />
        </div>
          </div>
        ))}
      </div>
    </div>
  );
}
