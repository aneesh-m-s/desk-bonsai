import { useState } from "react";
import BonsaiCanvas from "./components/BonsaiCanvas";
import { INITIAL_PLANT } from "./utils/plant";
import { getGrowthStage } from "./utils/growth";
import type { PlantState } from "./types/plant";

function App() {
  const [plant, setPlant] = useState<PlantState>(INITIAL_PLANT);

  function addTestXP(amount: number) {
    setPlant((currentPlant) => {
      const newXP = currentPlant.xp + amount;

      return {
        ...currentPlant,
        xp: newXP,
        stage: getGrowthStage(newXP),
      };
    });
  }

  return (
    <div className="app">
      <BonsaiCanvas />

      <h1>Desk Bonsai</h1>

      <p>Stage: {plant.stage}</p>

      <p>XP: {plant.xp}</p>

      <button onClick={() => addTestXP(10)}>
        Grow +10 XP
      </button>
    </div>
  );
}

export default App;