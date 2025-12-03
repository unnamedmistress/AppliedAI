import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { acts } from '../data/acts';
import { worlds } from '../data/worlds';
import { useProgress } from '../hooks/useProgress';
import Header from '../components/Header';
import KnowledgeTilesSection from '../components/KnowledgeTilesSection';
import DemoSection from '../components/DemoSection';
import MiniGameSection from '../components/MiniGameSection';
import PromptUnlockedModal from '../components/PromptUnlockedModal';
import './ActPage.css';

const ActPage = () => {
  const { actId } = useParams<{ actId: string }>();
  const navigate = useNavigate();
  const { progress, completeAct, unlockPrompt, isActCompleted } = useProgress();
  
  const [currentSection, setCurrentSection] = useState<'read' | 'watch' | 'play'>('read');
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  
  const readRef = useRef<HTMLDivElement>(null);
  const watchRef = useRef<HTMLDivElement>(null);
  const playRef = useRef<HTMLDivElement>(null);

  const act = acts.find(a => a.id === actId);
  const world = act ? worlds.find(w => w.id === act.worldId) : null;
  const isCompleted = actId ? isActCompleted(actId) : false;

  useEffect(() => {
    if (progress.startPreference === 'play') {
      setCurrentSection('play');
      setTimeout(() => playRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [progress.startPreference]);

  const handleGameComplete = () => {
    setGameCompleted(true);
    if (act && !isCompleted) {
      completeAct(act.id);
      unlockPrompt(act.promptRecipe.id);
      setShowPromptModal(true);
    }
  };

  const scrollToSection = (section: 'read' | 'watch' | 'play') => {
    setCurrentSection(section);
    const refs = { read: readRef, watch: watchRef, play: playRef };
    refs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!act || !world) {
    return <div>Act not found</div>;
  }

  return (
    <div className="act-page">
      <Header />
      
      <div className="act-hud" style={{ backgroundColor: world.color }}>
        <div className="hud-content">
          <div className="hud-left">
            <span className="hud-label">Skill:</span>
            <span className="hud-value">{act.learningObjective}</span>
          </div>
          <div className="hud-right">
            <button
              className={`hud-step ${currentSection === 'read' ? 'active' : ''} ${gameCompleted ? 'complete' : ''}`}
              onClick={() => scrollToSection('read')}
            >
              📖 Read
            </button>
            <button
              className={`hud-step ${currentSection === 'watch' ? 'active' : ''} ${gameCompleted ? 'complete' : ''}`}
              onClick={() => scrollToSection('watch')}
            >
              👁️ Watch
            </button>
            <button
              className={`hud-step ${currentSection === 'play' ? 'active' : ''} ${gameCompleted ? 'complete' : ''}`}
              onClick={() => scrollToSection('play')}
            >
              🎮 Play {gameCompleted && '✓'}
            </button>
          </div>
        </div>
      </div>

      <div className="act-content">
        <div className="act-header">
          <button className="back-btn" onClick={() => navigate(`/worlds/${world.id}`)}>
            ← Back to {world.name}
          </button>
          <h1>{act.name}</h1>
        </div>

        <div ref={readRef} className="act-section">
          <KnowledgeTilesSection tiles={act.knowledgeTiles} color={world.color} />
          <button
            className="btn btn-primary section-nav-btn"
            style={{ backgroundColor: world.color }}
            onClick={() => scrollToSection('watch')}
          >
            Next: Watch Demo →
          </button>
        </div>

        <div ref={watchRef} className="act-section">
          <DemoSection demo={act.demo} color={world.color} />
          <button
            className="btn btn-primary section-nav-btn"
            style={{ backgroundColor: world.color }}
            onClick={() => scrollToSection('play')}
          >
            Next: Play Mini-Game →
          </button>
        </div>

        <div ref={playRef} className="act-section">
          <MiniGameSection
            miniGame={act.miniGame}
            actId={act.id}
            color={world.color}
            onComplete={handleGameComplete}
            isCompleted={gameCompleted || isCompleted}
          />
        </div>
      </div>

      {showPromptModal && (
        <PromptUnlockedModal
          prompt={act.promptRecipe}
          worldColor={world.color}
          onClose={() => {
            setShowPromptModal(false);
            navigate('/my-moves');
          }}
        />
      )}
    </div>
  );
};

export default ActPage;
