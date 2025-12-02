import { useParams, useNavigate } from 'react-router-dom';
import { worlds } from '../data/worlds';
import { acts } from '../data/acts';
import { useProgress } from '../hooks/useProgress';
import Header from '../components/Header';
import './WorldDetailPage.css';

const WorldDetailPage = () => {
  const { worldId } = useParams<{ worldId: string }>();
  const navigate = useNavigate();
  const { isActCompleted } = useProgress();

  const world = worlds.find(w => w.id === worldId);
  const worldActs = acts.filter(act => act.worldId === worldId);

  if (!world) {
    return <div>World not found</div>;
  }

  const getActStatus = (actId: string) => {
    return isActCompleted(actId) ? 'complete' : 'not-started';
  };

  return (
    <div className="world-detail-page">
      <Header />
      
      <div className="world-detail-content">
        <div className="world-header" style={{ borderColor: world.color }}>
          <button className="back-btn" onClick={() => navigate('/worlds')}>
            ← Back to Worlds
          </button>
          <h1>{world.name}</h1>
          <p className="world-theme">{world.theme}</p>
        </div>

        <div className="acts-section">
          <h2>Acts</h2>
          <div className="acts-list">
            {worldActs.map((act, index) => {
              const status = getActStatus(act.id);
              
              return (
                <div
                  key={act.id}
                  className={`act-card ${status}`}
                  style={{ borderColor: world.color }}
                >
                  <div className="act-number">Act {index + 1}</div>
                  <div className="act-content">
                    <h3>{act.name}</h3>
                    <p className="act-objective">{act.learningObjective}</p>
                    
                    {status === 'complete' && (
                      <div className="completion-badge">
                        <span className="check-icon">✓</span> Complete
                      </div>
                    )}
                    
                    <button
                      className="btn btn-primary"
                      style={{ backgroundColor: world.color }}
                      onClick={() => navigate(`/acts/${act.id}`)}
                    >
                      {status === 'complete' ? 'Review' : 'Start Act'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldDetailPage;
