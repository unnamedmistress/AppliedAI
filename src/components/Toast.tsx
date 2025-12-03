import { useEffect } from 'react';
import './Toast.css';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast = ({ message, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      <span>✓ {message}</span>
    </div>
  );
};

export default Toast;
