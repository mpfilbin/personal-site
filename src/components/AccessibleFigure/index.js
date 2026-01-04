"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccessibleFigure;
var react_1 = require("react");
var styles_module_css_1 = require("./styles.module.css");
function AccessibleFigure(_a) {
    var src = _a.src, alt = _a.alt, caption = _a.caption, _b = _a.className, className = _b === void 0 ? '' : _b, width = _a.width, height = _a.height;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var prevActiveRef = (0, react_1.useRef)(null);
    var closeButtonRef = (0, react_1.useRef)(null);
    var captionIdRef = (0, react_1.useRef)("af-caption-".concat(Math.random().toString(36).slice(2)));
    (0, react_1.useEffect)(function () {
        var _a;
        function onKey(e) {
            if (e.key === 'Escape') {
                setOpen(false);
            }
        }
        if (open) {
            prevActiveRef.current = document.activeElement;
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', onKey);
            // focus close button after open
            setTimeout(function () { var _a; return (_a = closeButtonRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, 0);
        }
        else {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
            (_a = prevActiveRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        return function () {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [open]);
    return (<figure className={"".concat(styles_module_css_1.default.figure, " ").concat(className).trim()}>
      <button className={"".concat(styles_module_css_1.default.imageButton, " button button--link")} aria-label={"Open image: ".concat(alt)} onClick={function () { return setOpen(true); }}>
        <img src={src} alt={alt} loading="lazy" width={width} height={height} className={styles_module_css_1.default.img}/>
      </button>
      {caption && (<figcaption id={captionIdRef.current} className={styles_module_css_1.default.caption}>
          {caption}
        </figcaption>)}

      {open && (<div className={styles_module_css_1.default.overlay} role="dialog" aria-modal="true" aria-describedby={caption ? captionIdRef.current : undefined} onClick={function () { return setOpen(false); }}>
          <div className={styles_module_css_1.default.dialog} onClick={function (e) { return e.stopPropagation(); }}>
            <button ref={closeButtonRef} className={"".concat(styles_module_css_1.default.close, " button button--secondary button--sm")} aria-label="Close image" onClick={function () { return setOpen(false); }}>
              ×
            </button>
            <img src={src} alt={alt} className={styles_module_css_1.default.fullImage}/>
            {caption && <div className={styles_module_css_1.default.captionFull}>{caption}</div>}
          </div>
        </div>)}
    </figure>);
}
