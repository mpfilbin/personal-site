"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_leaflet_1 = require("react-leaflet");
var gpx_parser_builder_1 = require("gpx-parser-builder");
var ClientMap = function (_a) {
    var routeURL = _a.routeURL, height = _a.height, width = _a.width, center = _a.center, _b = _a.zoom, zoom = _b === void 0 ? 16 : _b;
    var _c = (0, react_1.useState)([]), coords = _c[0], setCoords = _c[1];
    var _d = (0, react_1.useState)('loading'), loadingState = _d[0], setLoadingState = _d[1];
    var _e = (0, react_1.useState)(null), error = _e[0], setError = _e[1];
    (0, react_1.useEffect)(function () {
        var abortController = new AbortController();
        var loadGpxData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, gpxText, gpx, coordinates, err_1, errorMessage;
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 3, , 4]);
                        setLoadingState('loading');
                        setError(null);
                        return [4 /*yield*/, fetch(routeURL, { signal: abortController.signal })];
                    case 1:
                        response = _e.sent();
                        if (!response.ok) {
                            throw new Error("Failed to fetch GPX: ".concat(response.status, " ").concat(response.statusText));
                        }
                        return [4 /*yield*/, response.text()];
                    case 2:
                        gpxText = _e.sent();
                        if (abortController.signal.aborted)
                            return [2 /*return*/];
                        gpx = gpx_parser_builder_1.default.parse(gpxText);
                        if (!((_d = (_c = (_b = (_a = gpx === null || gpx === void 0 ? void 0 : gpx.trk) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.trkseg) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.trkpt)) {
                            throw new Error('Invalid GPX data structure');
                        }
                        coordinates = gpx.trk[0].trkseg[0].trkpt.map(function (point) { return [
                            parseFloat(point.$.lat),
                            parseFloat(point.$.lon)
                        ]; });
                        if (abortController.signal.aborted)
                            return [2 /*return*/];
                        setCoords(coordinates);
                        setLoadingState('success');
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _e.sent();
                        if (abortController.signal.aborted)
                            return [2 /*return*/];
                        errorMessage = err_1 instanceof Error ? err_1.message : 'Failed to load map data';
                        setError(errorMessage);
                        setLoadingState('error');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        loadGpxData();
        return function () {
            abortController.abort();
        };
    }, [routeURL]);
    if (loadingState === 'loading') {
        return (<div style={{ height: height, width: width, display: 'flex', alignItems: 'center', justifyContent: 'center' }} role="status" aria-live="polite">
        Loading route data...
      </div>);
    }
    if (loadingState === 'error') {
        return (<div style={{ height: height, width: width, display: 'flex', alignItems: 'center', justifyContent: 'center' }} role="alert">
        <p>Error loading route: {error}</p>
      </div>);
    }
    return (<div className="route-map-container" style={{ height: height, width: width }}>
      <react_leaflet_1.MapContainer style={{ height: '100%', width: '100%' }} zoom={zoom} center={center} scrollWheelZoom={false}>
        <react_leaflet_1.TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {coords.length > 0 && (<react_leaflet_1.Polyline pathOptions={{ fillColor: 'red', color: 'blue' }} positions={coords}/>)}
      </react_leaflet_1.MapContainer>
    </div>);
};
exports.default = ClientMap;
