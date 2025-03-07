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
import ReportError from '@/components/ReportError';

export default function MushroomPage() {
    const searchParams = useSearchParams(); 
    const [mushroomData, setMushroomData] = useState(null);
    const [showMessage, setShowMessage] = useState(false); 
    const [filteredMushrooms, setFilteredMushrooms] = useState([]); 
    const [showToxicMessage, setShowToxicMessage] = useState(false); 
  
    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisitedMushroomPage');
        if (!hasVisited) {
            setShowMessage(true);
            localStorage.setItem('hasVisitedMushroomPage', 'true');
        }
    }, []);

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
    }, [searchParams]);
  
    useEffect(() => {
        if (mushroomDataJson && mushroomDataJson.mushroomCards) {
            if (mushroomData) {
                const filteredMushrooms = mushroomDataJson.mushroomCards.filter(
                    (mushroomCard) => mushroomCard.name !== mushroomData.name
                );
                setFilteredMushrooms(filteredMushrooms);
                setShowToxicMessage(mushroomData.features.is_toxic);
            } else {
                setFilteredMushrooms(mushroomDataJson.mushroomCards);
                setShowToxicMessage(false);
            }
        }
    }, [mushroomDataJson, mushroomData]);
  
    // Find the index of the selected mushroom
    const selectedMushroomIndex = mushroomData ? mushroomDataJson.mushroomCards.findIndex(m => m.name === mushroomData.name) : -1;

    return (
        <div className="page relative" style={{ backgroundColor: '#F2F2F2' }}>
            <TopBar>
                <h1>Match Results</h1>
            </TopBar>
            <ReportError/>
            <NavBar />
            {showMessage && <Message />} 
            {showToxicMessage && <div style={{ marginTop: '30px' }}><ToxicMessage /></div>} 
            
            <div style={{ marginTop: '20px' }}>
                {mushroomData ? (
                    <div>
                        <h2>Selected Mushroom</h2>
                        <Link href={`/comparison?mushroomIndex=${selectedMushroomIndex}`} className="flex items-center mb-4">
                            <span style={{ color: 'black' }}>comparison &gt;</span>
                        </Link>
                        <MushroomCard mushroom={mushroomData} card={false} baseMushroom={mushroomData} />
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
                            baseMushroom={mushroomData} 
                            style={{ width: '134px', height: '169px' }} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
