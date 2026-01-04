"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
var Alert = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'primary' : _b, children = _a.children, onDismiss = _a.onDismiss;
    return (<div className={"alert alert--".concat(type)} role="alert">
    {onDismiss ? <button aria-label="Close" className="clean-btn close" type="button" onClick={onDismiss}>
      <span aria-hidden="true">&times;</span>
    </button> : null}
    {children}
  </div>);
};
exports.Alert = Alert;
