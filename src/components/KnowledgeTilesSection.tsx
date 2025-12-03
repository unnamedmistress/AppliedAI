import type { KnowledgeTile } from '../types';
import './KnowledgeTilesSection.css';

interface Props {
  tiles: KnowledgeTile[];
  color: string;
}

const KnowledgeTilesSection = ({ tiles, color }: Props) => {
  return (
    <div className="knowledge-tiles-section">
      <h2>📖 Knowledge Tiles</h2>
      <p className="section-subtitle">Learn the concepts behind the skill</p>
      
      <div className="tiles-grid">
        {tiles.map((tile, index) => (
          <div key={index} className="knowledge-tile" style={{ borderColor: color }}>
            <h3>{tile.title}</h3>
            <ul>
              {tile.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeTilesSection;
