"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Pill;
var react_1 = require("react");
var clsx_1 = require("clsx");
var styles_module_css_1 = require("./styles.module.css");
function Pill(_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? 'secondary' : _c, children = _a.children, className = _a.className, rest = __rest(_a, ["variant", "children", "className"]);
    // normalize variant to a classname key
    var variantKey = String(variant).toLowerCase();
    return (<span className={(0, clsx_1.default)(styles_module_css_1.default.pill, styles_module_css_1.default["pill_".concat(variantKey)], (_b = {},
            _b[styles_module_css_1.default.pill_small] = variantKey === 'small' || variantKey === 'sm',
            _b), className)} {...rest}>
      {children}
    </span>);
}
