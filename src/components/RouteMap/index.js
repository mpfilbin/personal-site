"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteMap = void 0;
var react_1 = require("react");
var BrowserOnly_1 = require("@docusaurus/BrowserOnly");
var RouteMap = function (_a) {
    var routeURL = _a.routeURL, dimensions = _a.dimensions, center = _a.center, zoom = _a.zoom;
    var _b = (0, react_1.useState)(false), isBrowser = _b[0], setIsBrowser = _b[1];
    (0, react_1.useEffect)(function () {
        setIsBrowser(true);
    }, []);
    var _c = dimensions !== null && dimensions !== void 0 ? dimensions : {}, _d = _c.height, height = _d === void 0 ? '500px' : _d, _e = _c.width, width = _e === void 0 ? '500px' : _e;
    if (!isBrowser) {
        return <div style={{ height: height, width: width }}/>;
    }
    return (<BrowserOnly_1.default fallback={<div style={{ height: height, width: width }}/>}>
      {function () {
            // Require client-only module at runtime so the server build doesn't try to resolve its transitive deps
            // (like jsdom/canvas from gpxparser). Using require keeps this synchronous inside the BrowserOnly callback.
            // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
            var ClientMap = require('./ClientMap').default;
            return <ClientMap routeURL={routeURL} height={height} width={width} center={center} zoom={zoom}/>;
        }}
    </BrowserOnly_1.default>);
};
exports.RouteMap = RouteMap;
