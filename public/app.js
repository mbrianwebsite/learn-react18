const root = ReactDOM.createRoot(document.getElementById("root"));
function box() {
  function whenClicked() {
    alert(1);
  }
  const wrapper = /*#__PURE__*/React.createElement("button", {
    onClick: whenClicked()
  }, "Click Me");
  root.render(wrapper);
}
box();