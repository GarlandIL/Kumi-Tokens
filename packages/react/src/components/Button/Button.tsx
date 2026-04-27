import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  variant = 'primary',
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[variant],   // this resolves to styles.primary or styles.secondary
  ].join(' ');

  return <button className={classNames}>{children}</button>;
};