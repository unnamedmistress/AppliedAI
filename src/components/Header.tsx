import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { progress } = useProgress();

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo" onClick={() => navigate('/')}>
          <span className="logo-icon">🎮</span>
          <span className="logo-text">Super Learner Bros</span>
        </div>
        
        <nav className="nav-links">
          <button className="nav-btn" onClick={() => navigate('/worlds')}>
            Worlds
          </button>
          <button className="nav-btn" onClick={() => navigate('/my-moves')}>
            My AI Moves ({progress.unlockedPrompts.length})
          </button>
          <span className="difficulty-badge">{progress.difficulty.toUpperCase()}</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
