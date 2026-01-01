import React from 'react';
import styles from './styles.module.css';

export type PillVariant =
  | 'experiment'
  | 'project'
  | 'success'
  | 'warning'
  | 'secondary'
  | 'neutral';

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: PillVariant;
  children: React.ReactNode;
}

export default function Pill({
  variant = 'neutral',
  children,
  className = '',
  ...rest
}: PillProps) {
  const variantClass = (styles as any)[`pill_${variant}`] ?? '';

  return (
    <span className={`${styles.pill} ${variantClass} ${className}`} {...rest}>
      {children}
    </span>
  );
}

