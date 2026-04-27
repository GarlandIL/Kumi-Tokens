import React, { useState } from 'react';
import styles from './Alert.module.css';

export interface AlertProps {
  /** The visual style variant */
  variant: 'success' | 'warning' | 'error' | 'info';
  /** Main title of the alert */
  title?: string;
  /** Children content (the message body) */
  children: React.ReactNode;
  /** Whether the alert can be dismissed */
  dismissible?: boolean;
  /** Callback when the alert is dismissed */
  onDismiss?: () => void;
}

export const Alert = ({
  variant,
  title,
  children,
  dismissible = false,
  onDismiss,
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  // Map variant to icon (simple emoji for now – later we'll use proper icons)
  const iconMap = {
    success: '✅',
    warning: '⚠️',
    error: '❌',
    info: 'ℹ️',
  };

  return (
    <div
      className={`${styles.alert} ${styles[variant]}`}
      role="alert"
      aria-live="polite"
    >
      <span aria-hidden="true" className={styles.icon}>
        {iconMap[variant]}
      </span>
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button
          className={styles.dismiss}
          onClick={handleDismiss}
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  );
};