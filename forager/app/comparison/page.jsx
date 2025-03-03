'use client'
import { useSearchParams } from 'next/navigation'; // Import useSearchParams from next/navigation
import NavBar from '../../components/NavBar';
import ComparisonTable from '../../components/ComparisonTable'; // Import the ComparisonTable component

export default function MushroomComparisonPage() {
    const searchParams = useSearchParams();
    const mushroomId = searchParams.get('mushroomId'); // Assuming you're getting a mushroom ID from query parameters

    return (
        <div>
            <NavBar />
            <h1>Mushroom Comparison</h1>
            <ComparisonTable mushroomId={mushroomId} /> {/* Pass the mushroomId to ComparisonTable */}
        </div>
    );
}
