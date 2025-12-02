import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './hooks/useProgress';
import HomePage from './pages/HomePage';
import WorldMapPage from './pages/WorldMapPage';
import WorldDetailPage from './pages/WorldDetailPage';
import ActPage from './pages/ActPage';
import MyAIMovesPage from './pages/MyAIMovesPage';
import './App.css';

function App() {
  return (
    <ProgressProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/worlds" element={<WorldMapPage />} />
            <Route path="/worlds/:worldId" element={<WorldDetailPage />} />
            <Route path="/acts/:actId" element={<ActPage />} />
            <Route path="/my-moves" element={<MyAIMovesPage />} />
          </Routes>
        </div>
      </Router>
    </ProgressProvider>
  );
}

export default App;
