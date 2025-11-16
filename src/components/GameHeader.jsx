export const GameHeader = ({ score, moves, onReset }) => {
  return (
    <div className="game-header font-bold">
      <h1>🎮 Match Master 🎮</h1>
      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">Score:</span>{" "}
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Moves:</span>{" "}
          <span className="stat-value">{moves}</span>
        </div>
      </div>

      <button className="reset-btn" onClick={onReset}>
        New Game
      </button>
    </div>
  );
};