'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _libJs = require('./lib.js');

var PieChart = (function (_React$Component) {
  _inherits(PieChart, _React$Component);

  function PieChart() {
    _classCallCheck(this, PieChart);

    _get(Object.getPrototypeOf(PieChart.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PieChart, [{
    key: 'draw',
    value: function draw() {
      var _this = this;

      var data = this.props.data;
      var colors = this.props.colors;

      var svgArcs = [];
      var sectors = [];
      var startAngle = 0;
      var endAngle = 0;
      var total = 0;

      data.forEach(function (n) {
        return total += n;
      });
      data.forEach(function (n) {
        return sectors.push(360 * n / total);
      });

      sectors.forEach(function (n, i) {

        startAngle = endAngle;
        endAngle = startAngle + n;

        var flag = i === sectors.length - 1;
        var sect = (0, _libJs.calcSector)(n, _this.props.radius, startAngle, endAngle, flag, colors[i]);

        svgArcs.push(sect);
      });

      return svgArcs;
    }
  }, {
    key: 'render',
    value: function render() {

      var svgArcs = this.draw();
      var size = this.props.radius * 2;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'sector' },
          'hello'
        ),
        _react2['default'].createElement(
          'svg',
          { height: size, width: size },
          svgArcs
        )
      );
    }
  }]);

  return PieChart;
})(_react2['default'].Component);

exports['default'] = PieChart;
module.exports = exports['default'];