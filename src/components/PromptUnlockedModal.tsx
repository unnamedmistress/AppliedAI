import type { PromptRecipe } from '../types';
import './PromptUnlockedModal.css';

interface Props {
  prompt: PromptRecipe;
  worldColor: string;
  onClose: () => void;
}

const PromptUnlockedModal = ({ prompt, worldColor, onClose }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    alert('Prompt copied to clipboard!');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ borderColor: worldColor }}>
        <div className="modal-header" style={{ backgroundColor: worldColor }}>
          <h2>🎉 Prompt Unlocked!</h2>
        </div>
        
        <div className="modal-body">
          <h3>{prompt.name}</h3>
          <p className="prompt-description">{prompt.description}</p>
          
          <div className="prompt-box">
            <pre>{prompt.prompt}</pre>
          </div>
          
          <div className="modal-actions">
            <button className="btn btn-secondary" onClick={handleCopy}>
              📋 Copy Prompt
            </button>
            <button className="btn btn-primary" style={{ backgroundColor: worldColor }} onClick={onClose}>
              View All My AI Moves
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptUnlockedModal;
