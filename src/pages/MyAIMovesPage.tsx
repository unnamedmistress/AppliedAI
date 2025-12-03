import { useState } from 'react';
import { acts } from '../data/acts';
import { worlds } from '../data/worlds';
import { useProgress } from '../hooks/useProgress';
import Header from '../components/Header';
import Toast from '../components/Toast';
import './MyAIMovesPage.css';

const MyAIMovesPage = () => {
  const { progress } = useProgress();
  const [showToast, setShowToast] = useState(false);

  const unlockedPrompts = acts
    .filter(act => progress.unlockedPrompts.includes(act.promptRecipe.id))
    .map(act => ({
      ...act.promptRecipe,
      world: worlds.find(w => w.id === act.worldId),
      act: act,
    }));

  const handleCopy = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setShowToast(true);
  };

  return (
    <div className="my-moves-page">
      <Header />
      
      <div className="my-moves-content">
        <h1>My AI Moves</h1>
        <p className="subtitle">Your collection of unlocked prompt recipes</p>

        {unlockedPrompts.length === 0 ? (
          <div className="empty-state">
            <h2>No prompts unlocked yet</h2>
            <p>Complete mini-games in the worlds to unlock powerful AI prompt recipes!</p>
          </div>
        ) : (
          <div className="prompts-grid">
            {unlockedPrompts.map((item) => (
              <div
                key={item.id}
                className="prompt-card"
                style={{ borderColor: item.world?.color }}
              >
                <div className="prompt-card-header">
                  <h3>{item.name}</h3>
                  <span className="world-badge" style={{ backgroundColor: item.world?.color }}>
                    {item.world?.name}
                  </span>
                </div>
                
                <p className="prompt-description">{item.description}</p>
                
                <div className="prompt-preview">
                  <pre>{item.prompt}</pre>
                </div>
                
                <div className="prompt-meta">
                  <span className="act-name">From: {item.act.name}</span>
                </div>
                
                <button
                  className="btn btn-secondary copy-btn"
                  onClick={() => handleCopy(item.prompt)}
                >
                  📋 Copy Prompt
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="prompts-summary">
          <h3>Progress Summary</h3>
          <p>You've unlocked {unlockedPrompts.length} out of 12 prompt recipes</p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(unlockedPrompts.length / 12) * 100}%` }}
            />
          </div>
        </div>
      </div>
      
      {showToast && (
        <Toast message="Prompt copied to clipboard!" onClose={() => setShowToast(false)} />
      )}
    </div>
  );
};

export default MyAIMovesPage;
