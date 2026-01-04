import { FC, PropsWithChildren } from 'react';

interface AlertProperties {
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
  onDismiss?: () => void;
}

export const Alert: FC<PropsWithChildren<AlertProperties>> = ({ type = 'primary', children, onDismiss}) => (
  <div className={`alert alert--${type}`} role="alert">
    {onDismiss ? <button aria-label="Close" className="clean-btn close" type="button" onClick={onDismiss}>
      <span aria-hidden="true">&times;</span>
    </button> : null}
    {children}
  </div>
)