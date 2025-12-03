import { useState } from 'react';
import { useProgress } from '../hooks/useProgress';
import type { Difficulty, StartPreference } from '../types';
import './OnboardingOverlay.css';

const OnboardingOverlay = () => {
  const [step, setStep] = useState(1);
  const { setDifficulty, setStartPreference, completeOnboarding } = useProgress();
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('normal');
  const [selectedPreference, setSelectedPreference] = useState<StartPreference>('read');

  const handleComplete = () => {
    setDifficulty(selectedDifficulty);
    setStartPreference(selectedPreference);
    completeOnboarding();
  };

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-modal">
        {step === 1 && (
          <>
            <h2>Select Your Difficulty</h2>
            <p>Choose how you'd like to learn</p>
            
            <div className="difficulty-options">
              <button
                className={`difficulty-btn ${selectedDifficulty === 'chill' ? 'selected' : ''}`}
                onClick={() => setSelectedDifficulty('chill')}
              >
                <h3>🌟 Chill Mode</h3>
                <p>More examples, more hints, fewer "you try" steps</p>
              </button>
              
              <button
                className={`difficulty-btn ${selectedDifficulty === 'normal' ? 'selected' : ''}`}
                onClick={() => setSelectedDifficulty('normal')}
              >
                <h3>⚡ Normal Mode</h3>
                <p>Balanced approach with guidance and practice</p>
              </button>
              
              <button
                className={`difficulty-btn ${selectedDifficulty === 'boss' ? 'selected' : ''}`}
                onClick={() => setSelectedDifficulty('boss')}
              >
                <h3>🔥 Boss Mode</h3>
                <p>Shorter hints, more user input, fewer ready-made prompts</p>
              </button>
            </div>
            
            <button className="btn btn-primary" onClick={() => setStep(2)}>
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>How Do You Want to Start?</h2>
            <p>Choose your preferred learning approach</p>
            
            <div className="preference-options">
              <button
                className={`preference-btn ${selectedPreference === 'read' ? 'selected' : ''}`}
                onClick={() => setSelectedPreference('read')}
              >
                <h3>📖 Start with a Quick Read</h3>
                <p>Begin with knowledge tiles and concepts</p>
              </button>
              
              <button
                className={`preference-btn ${selectedPreference === 'play' ? 'selected' : ''}`}
                onClick={() => setSelectedPreference('play')}
              >
                <h3>🎮 Jump into Interactive Mode</h3>
                <p>Start with hands-on mini-games</p>
              </button>
            </div>
            
            <div className="button-group">
              <button className="btn btn-secondary" onClick={() => setStep(1)}>
                Back
              </button>
              <button className="btn btn-primary" onClick={handleComplete}>
                Let's Go!
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OnboardingOverlay;
