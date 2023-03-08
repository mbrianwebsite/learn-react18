const root = ReactDOM.createRoot(document.getElementById("root"));
function tick() {
  const wrapper = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()));
  root.render(wrapper);
}
tick();
setInterval(function () {
  tick();
}, 1000);