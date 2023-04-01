const root = ReactDOM.createRoot(document.getElementById("root"));
function tick() {
  const wrapper = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 200,
      backgroundColor: "blue"
    }
  });
  root.render(wrapper);
}
tick();