"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnimatedSprite;
var _useIntervalJs = require("use-interval-js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function AnimatedSprite(_ref) {
  var className = _ref.className,
    sheetWidth = _ref.sheetWidth,
    spriteSize = _ref.spriteSize,
    spriteIndices = _ref.spriteIndices,
    loop = _ref.loop;
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    index = _React$useState2[0],
    setIndex = _React$useState2[1];
  var spriteIndex = spriteIndices[index];
  var x = spriteIndex % sheetWidth;
  var y = Math.floor(spriteIndex / sheetWidth);
  (0, _useIntervalJs.useInterval)(function () {
    if (index < spriteIndices.length - 1) {
      setIndex(index + 1);
      return;
    }
    if (loop) {
      setIndex(0);
    }
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width: spriteSize,
      height: spriteSize,
      backgroundPosition: "-".concat(spriteSize * x, "px -").concat(spriteSize * y, "px")
    }
  });
}
;