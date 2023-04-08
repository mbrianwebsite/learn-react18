const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  const state = React.useState(0);
  const count = state[0];
  const setCount = state[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "-"));
}
root.render( /*#__PURE__*/React.createElement(App, null));