"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = function (_a) {
    var children = _a.children, title = _a.title, footerContent = _a.footerContent;
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
  </div>);
};
exports.Card = Card;
