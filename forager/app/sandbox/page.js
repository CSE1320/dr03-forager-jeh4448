// Import the JSON data
import mushroomData from "../../data/Mushrooms"; // Adjust the import path accordingly
import MushroomCard from "@/components/Mushroom";

export default function SandboxPage() {
    // Get the specific mushroom card you want to display
    const mushroom = mushroomData.mushroomCards.find(m => m.name === "Death Cap");

    return (
        <div className="page flex justify-center items-center flex-row flex-wrap">
            {mushroom && <MushroomCard mushroom={mushroom} card={false} />}
        </div>
    );
}
