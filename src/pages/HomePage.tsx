import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import OnboardingOverlay from '../components/OnboardingOverlay';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const { progress } = useProgress();

  return (
    <div className="home-page">
      {!progress.hasOnboarded && <OnboardingOverlay />}
      
      <div className="hero-section">
        <h1 className="hero-title">Super Learner Bros</h1>
        <p className="hero-subtitle">Learn Faster With AI</p>
        <p className="hero-description">
          Play through worlds. Unlock prompt moves. Use them on real work.
        </p>
        
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={() => navigate('/worlds')}>
            Start World 1
          </button>
          <button className="btn btn-secondary" onClick={() => {
            document.getElementById('worlds-overview')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Browse Worlds
          </button>
        </div>
      </div>

      <div className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <p>Pick a world</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Read, watch, play</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Save AI moves you like</p>
          </div>
        </div>
      </div>

      <div id="worlds-overview" className="worlds-overview">
        <h2>Explore the Worlds</h2>
        <div className="world-cards">
          <div className="world-card" style={{ borderColor: '#4CAF50' }}>
            <h3>World 1: Brain Boss Plains</h3>
            <p>Use AI to reduce confusion with multiple explanation styles</p>
          </div>
          <div className="world-card" style={{ borderColor: '#9C27B0' }}>
            <h3>World 2: Dungeon of Hard Tasks</h3>
            <p>Break down overwhelming tasks and find the right first step</p>
          </div>
          <div className="world-card" style={{ borderColor: '#FF9800' }}>
            <h3>World 3: AI Marketplace</h3>
            <p>Evaluate AI tools based on real needs, not marketing</p>
          </div>
          <div className="world-card" style={{ borderColor: '#2196F3' }}>
            <h3>World 4: Memory Mountain</h3>
            <p>Use AI to create memorable learning experiences</p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/worlds')}>
          Begin Your Journey
        </button>
      </div>
    </div>
  );
};

export default HomePage;
