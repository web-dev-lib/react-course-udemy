'use strict';

var appRoot = document.getElementById('app');

var togle = true;
var toggleSetter = function toggleSetter() {
  togle = togle ? false : true;

  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Some text'
    ),
    React.createElement(
      'button',
      { onClick: toggleSetter },
      'show'
    ),
    React.createElement(
      'p',
      { hidden: togle },
      'some paragraph'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
