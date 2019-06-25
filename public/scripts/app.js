'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggles = function (_React$Component) {
  _inherits(VisibilityToggles, _React$Component);

  function VisibilityToggles() {
    _classCallCheck(this, VisibilityToggles);

    var _this = _possibleConstructorReturn(this, (VisibilityToggles.__proto__ || Object.getPrototypeOf(VisibilityToggles)).call(this));

    _this.toggleSetter = _this.toggleSetter.bind(_this);
    _this.state = {
      togle: true
    };
    return _this;
  }

  _createClass(VisibilityToggles, [{
    key: 'toggleSetter',
    value: function toggleSetter() {
      this.setState(function (prevState) {
        return {
          togle: !prevState.togle
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Some text'
        ),
        React.createElement(
          'button',
          { onClick: this.toggleSetter },
          'show'
        ),
        React.createElement(
          'p',
          { hidden: this.state.togle },
          'some paragraph'
        )
      );
    }
  }]);

  return VisibilityToggles;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggles, null), document.getElementById('app'));

// const appRoot = document.getElementById('app')

// var togle = true
// const toggleSetter = () => {
//   togle = togle? false: true

//   renderApp()
// }

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Some text</h1>
//       <button onClick={toggleSetter}>show</button>
//       <p hidden={togle}>some paragraph</p>
//     </div>
//   )

//   ReactDOM.render(template, appRoot)
// }

// renderApp()
