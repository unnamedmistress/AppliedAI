import { useState } from 'react';
import type { MiniGame } from '../types';
import './MiniGameSection.css';

interface Props {
  miniGame: MiniGame;
  actId: string;
  color: string;
  onComplete: () => void;
  isCompleted: boolean;
}

const MiniGameSection = ({ miniGame, color, onComplete, isCompleted }: Props) => {
  const [userInput, setUserInput] = useState('');
  const [gameStep, setGameStep] = useState(0);
  const [showCompletionMessage, setShowCompletionMessage] = useState(isCompleted);

  const handleStart = () => {
    if (userInput.trim()) {
      setGameStep(1);
    }
  };

  const handleComplete = () => {
    setGameStep(2);
    setShowCompletionMessage(true);
    if (!isCompleted) {
      onComplete();
    }
  };

  return (
    <div className="mini-game-section">
      <h2>🎮 {miniGame.name}</h2>
      <p className="section-subtitle">{miniGame.description}</p>
      
      <div className="game-instructions" style={{ borderColor: color }}>
        <h3>How to Play:</h3>
        <ol>
          {miniGame.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
        <p className="completion-criteria">
          <strong>Complete when:</strong> {miniGame.completionCriteria}
        </p>
      </div>

      <div className="game-area" style={{ borderColor: color }}>
        {gameStep === 0 && (
          <div className="game-start">
            <h3>Ready to practice?</h3>
            <p>Enter a real topic or task to work with:</p>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="E.g., 'machine learning' or 'write a report'"
              className="game-input"
              onKeyPress={(e) => e.key === 'Enter' && handleStart()}
            />
            <button
              className="btn btn-primary"
              style={{ backgroundColor: color }}
              onClick={handleStart}
              disabled={!userInput.trim()}
            >
              Start Mini-Game
            </button>
            {isCompleted && (
              <p className="already-completed">✓ You've already completed this game!</p>
            )}
          </div>
        )}

        {gameStep === 1 && (
          <div className="game-playing">
            <div className="game-content">
              <h3>Your Topic: "{userInput}"</h3>
              <div className="simulation-box" style={{ borderColor: color }}>
                <p>🎲 In a live version, you would interact with the mini-game here.</p>
                <p>For this prototype, imagine you've completed the interactive activity:</p>
                <ul>
                  <li>Engaged with the learning mechanic</li>
                  <li>Applied the skill to your topic</li>
                  <li>Practiced the AI technique</li>
                </ul>
              </div>
            </div>
            <button
              className="btn btn-primary"
              style={{ backgroundColor: color }}
              onClick={handleComplete}
            >
              Complete Activity
            </button>
          </div>
        )}

        {showCompletionMessage && gameStep === 2 && (
          <div className="game-complete">
            <div className="completion-message">
              <span className="completion-icon">🎉</span>
              <h3>Mini-Game Complete!</h3>
              <p>You've mastered this skill. A prompt recipe has been unlocked!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniGameSection;
