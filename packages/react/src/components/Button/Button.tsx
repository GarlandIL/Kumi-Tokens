import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style variant */
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  variant = 'primary',
  ...props  // catch all native props like onClick, disabled, type, etc.
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[variant],
  ].join(' ');

  return <button className={classNames} {...props}>{children}</button>;
};