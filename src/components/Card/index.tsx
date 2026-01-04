import {PropsWithChildren, ReactElement} from 'react';

interface CardProperties {
  title: string;
  footerContent?: ReactElement
}

export const Card = ({children, title, footerContent}: PropsWithChildren<CardProperties>) => {
  return (<div className="card-demo">
    <div className="card">
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>
          {children}
        </p>
      </div>
      {footerContent ? <div className="card__footer">{footerContent}</div> : null}
    </div>
  </div>)
}