import React, { useEffect } from 'react';
import './ToastNotification.css';

const ToastNotification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast-notification">
      <span>{message}</span>
    </div>
  );
};

export default ToastNotification;
