import type { Demo } from '../types';
import './DemoSection.css';

interface Props {
  demo: Demo;
  color: string;
}

const DemoSection = ({ demo, color }: Props) => {
  return (
    <div className="demo-section">
      <h2>👁️ Show Me Demo</h2>
      <p className="section-subtitle">{demo.description}</p>
      
      <div className="demo-flow">
        {demo.steps.map((step, index) => (
          <div key={index} className="demo-step">
            <div className="step-marker" style={{ backgroundColor: color }}>
              {index + 1}
            </div>
            <div className="step-content">
              <p>{step}</p>
            </div>
            {index < demo.steps.length - 1 && (
              <div className="step-arrow">↓</div>
            )}
          </div>
        ))}
      </div>
      
      <div className="demo-note" style={{ borderColor: color }}>
        <strong>Note:</strong> In a live version, this would show an interactive demonstration. 
        For now, follow the steps above to understand the technique.
      </div>
    </div>
  );
};

export default DemoSection;
