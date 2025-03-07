'use client'
import { useSearchParams } from 'next/navigation'; // Import useSearchParams from next/navigation
import NavBar from '../../components/NavBar';
import ComparisonTable from '../../components/ComparisonTable'; // Import the ComparisonTable component
import TopBar from '@/components/TopBar';
import mushroomDataJson from '../../data/Mushrooms'; // Import mushroom data

export default function MushroomComparisonPage() {
    const searchParams = useSearchParams();
    const mushroomIndex = searchParams.get('mushroomIndex'); // Get the mushroom index from query parameters
    const mushroomData = mushroomDataJson.mushroomCards[mushroomIndex] || null; // Get the mushroom data using the index

    return (
        <div className="page relative" style={{ backgroundColor: '#F2F2F2' }}>
            <NavBar />
            <TopBar>
                <h1>Compare</h1>
            </TopBar>
            <ComparisonTable mushroomIndex={mushroomIndex} /> {/* Pass the mushroom data to ComparisonTable */}
        </div>
    );
}
