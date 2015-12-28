"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcSector = calcSector;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function calcSector(angle, radius, start, end, flag, fill) {
  var offSet = radius - 10;

  var x1 = parseInt(radius + offSet * Math.cos(Math.PI * start / 180));
  var y1 = parseInt(radius + offSet * Math.sin(Math.PI * start / 180));

  var x2 = parseInt(radius + offSet * Math.cos(Math.PI * end / 180));
  var y2 = flag ? radius : parseInt(radius + offSet * Math.sin(Math.PI * end / 180));

  var f = angle > 180 ? 1 : 0;
  var d = "M" + radius + "," + radius + "  L" + x1 + "," + y1 + "  A" + offSet + "," + offSet + " 0 " + f + ",1 " + x2 + "," + y2 + " z";

  var labelX = f ? radius - ((x1 + x2) / 2 - radius) : (x1 + x2) / 2;
  var labelY = f ? radius - ((y1 + y2) / 2 - radius) : (y1 + y2) / 2;

  return _react2["default"].createElement(
    "g",
    null,
    _react2["default"].createElement("path", { d: d, fill: fill, className: "sector" }),
    _react2["default"].createElement(
      "text",
      { textAnchor: "middle", x: labelX, y: labelY },
      "50%"
    )
  );
}