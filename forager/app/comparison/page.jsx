'use client'
import { useSearchParams } from 'next/navigation'; // Import useSearchParams from next/navigation
import NavBar from '../../components/NavBar';
import ComparisonTable from '../../components/ComparisonTable'; // Import the ComparisonTable component
import TopBar from '@/components/TopBar';

export default function MushroomComparisonPage() {
    const searchParams = useSearchParams();
    const mushroomId = searchParams.get('mushroomId'); // Assuming you're getting a mushroom ID from query parameters

    return (
        <div className="page relative" style={{ backgroundColor: '#F2F2F2' }}>
            <NavBar />
            <TopBar>
                    <h1>Compare</h1> {/* You can pass in any content here */}
            </TopBar>
            <ComparisonTable mushroomId={mushroomId} /> {/* Pass the mushroomId to ComparisonTable */}
        </div>
    );
}
