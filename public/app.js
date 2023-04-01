const root = ReactDOM.createRoot(document.getElementById("root"));
function box() {
  const wrapper = /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      alert(1);
    }
  }, "Click Me");
  root.render(wrapper);
}
box();