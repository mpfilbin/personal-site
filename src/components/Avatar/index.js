"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
var variantToClassName = function (variant) {
    switch (variant) {
        case 'small':
            return 'avatar__photo--sm';
        case "large":
            return 'avatar__photo--lg';
        case 'x-large':
            return 'avatar__photo--xl';
        case 'medium':
        default:
            return '';
    }
};
var Avatar = function (_a) {
    var name = _a.name, photoUrl = _a.photoUrl, description = _a.description, variant = _a.variant;
    return (<div className="avatar">
    <img className={"avatar__photo ".concat(variantToClassName(variant))} src={photoUrl} alt={"".concat(name, " - ").concat(description !== null && description !== void 0 ? description : "")}/>
    <div className="avatar__intro">
      <div className="avatar__name">{name}</div>
      {description ? <small className="avatar__subtitle">{description}</small> : null}
    </div>
  </div>);
};
exports.Avatar = Avatar;
