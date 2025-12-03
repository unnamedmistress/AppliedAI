import { useNavigate } from 'react-router-dom';
import { worlds } from '../data/worlds';
import { useProgress } from '../hooks/useProgress';
import Header from '../components/Header';
import './WorldMapPage.css';

const WorldMapPage = () => {
  const navigate = useNavigate();
  const { getCompletedActsForWorld } = useProgress();

  const isWorldUnlocked = (worldId: string) => {
    if (worldId === 'world-1') return true;
    if (worldId === 'world-2') return getCompletedActsForWorld('world-1') >= 2;
    if (worldId === 'world-3') return getCompletedActsForWorld('world-2') >= 1;
    if (worldId === 'world-4') return getCompletedActsForWorld('world-3') >= 1;
    return false;
  };

  const getWorldStatus = (worldId: string) => {
    if (!isWorldUnlocked(worldId)) return 'locked';
    const completed = getCompletedActsForWorld(worldId);
    if (completed === 3) return 'complete';
    if (completed > 0) return 'in-progress';
    return 'unlocked';
  };

  return (
    <div className="world-map-page">
      <Header />
      
      <div className="world-map-content">
        <h1>Choose Your World</h1>
        <p className="subtitle">Progress through 4 themed worlds to master AI learning</p>
        
        <div className="world-grid">
          {worlds.map((world) => {
            const status = getWorldStatus(world.id);
            const completed = getCompletedActsForWorld(world.id);
            const isUnlocked = isWorldUnlocked(world.id);
            
            return (
              <div
                key={world.id}
                className={`world-tile ${status}`}
                style={{ borderColor: world.color }}
                onClick={() => isUnlocked && navigate(`/worlds/${world.id}`)}
              >
                <div className="world-tile-header">
                  <h2>{world.name}</h2>
                  {!isUnlocked && <span className="lock-icon">🔒</span>}
                  {status === 'complete' && <span className="check-icon">✓</span>}
                </div>
                
                <p className="world-tagline">{world.tagline}</p>
                
                <div className="world-progress">
                  <span className="progress-text">{completed}/3 Acts Complete</span>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${(completed / 3) * 100}%`,
                        backgroundColor: world.color,
                      }}
                    />
                  </div>
                </div>
                
                {!isUnlocked && (
                  <p className="unlock-requirement">{world.unlockRequirement}</p>
                )}
                
                {isUnlocked && (
                  <button
                    className="btn btn-small"
                    style={{ backgroundColor: world.color }}
                  >
                    {status === 'unlocked' ? 'Start' : 'Continue'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorldMapPage;
