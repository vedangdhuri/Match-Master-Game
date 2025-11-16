import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";
import { Footer } from "./components/Footer";
import bmw from "./assets/bmw.png";
import ferrari from "./assets/ferrari.png";
import lamborghini from "./assets/lamborghini.png";
import mclaren from "./assets/mclaren.png";
import mercedes from "./assets/mercedes.png";
import nissan from "./assets/nissan.png";
import pagani from "./assets/pagani.png";
import porsche from "./assets/porsche.png";

// const cardValues = [
//   "🚗",
//   "🚓",
//   "🚜",
//   "🚀",
//   "🛬",
//   "🚁",
//   "🏍️",
//   "🚚",
//   "🚗",
//   "🚓",
//   "🚜",
//   "🚀",
//   "🛬",
//   "🚁",
//   "🏍️",
//   "🚚"
// ];

const cardValues = [
  bmw,
  ferrari,
  lamborghini,
  mclaren,
  mercedes,
  nissan,
  pagani,
  porsche,
  bmw,
  ferrari,
  lamborghini,
  mclaren,
  mercedes,
  nissan,
  pagani,
  porsche,
]

function App() {
  const {
    cards,
    score,
    moves,
    handleCardClick,
    initializeGame,
    isGameComplete,
  } = useGameLogic(cardValues);

  return (
    <>
      <div className="app min-h-screen">
        <GameHeader score={score} moves={moves} onReset={initializeGame} />

        {isGameComplete && <WinMessage moves={moves} />}

        <div className="cards-grid">
          {cards.map((card) => (
            <Card card={card} onClick={handleCardClick} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;