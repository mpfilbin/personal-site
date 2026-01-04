"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("devicon");
var DevIcon = function (props) {
    // Default style
    var style = __assign({ fontSize: '5rem' }, (props.style || {}));
    // Allow size override
    if (props.size) {
        style.fontSize = props.size;
    }
    // devicon expects a class like `devicon-typescript-plain` and optionally `colored`
    var className = "devicon-".concat(props.name);
    // Default: add `colored` class unless explicitly disabled
    if (props.colored !== false) {
        className += ' colored';
    }
    return <i className={className} style={style} aria-hidden/>;
};
exports.default = DevIcon;
