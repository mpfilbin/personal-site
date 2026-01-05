import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type PillVariant =
    | 'project'
    | 'error'
    | 'success'
    | 'warning'
    | 'secondary'
    | 'neutral'
    | 'small'
    | string;

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: PillVariant;
    children: React.ReactNode;
}

export default function Pill({variant = 'secondary', children, className, ...rest}: PillProps) {
    // normalize variant to a classname key
    const variantKey = String(variant).toLowerCase();

    return (
        <span
            className={clsx(styles.pill, styles[`pill_${variantKey}`], {
                [styles.pill_small]: variantKey === 'small' || variantKey === 'sm',
            }, className)}
            {...rest}
        >
      {children}
    </span>
    );
}

