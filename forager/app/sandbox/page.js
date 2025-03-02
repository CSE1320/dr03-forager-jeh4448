// Import the JSON data
import mushroomData from "../../data/Mushrooms"; // Adjust the import path accordingly
import MushroomCard from "@/components/Mushroom";

export default function SandboxPage() {
    return (
        <div className="page flex justify-center items-center flex-row flex-wrap">
            {mushroomData.mushroomCards.map((mushroom, index) => (
                <MushroomCard key={index} mushroom={mushroom} card = {true} />
            ))}
        </div>
    );
}
