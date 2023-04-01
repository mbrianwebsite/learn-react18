const root = ReactDOM.createRoot(document.getElementById("root"));
function box() {
  function whenClicked(arg) {
    alert(arg);
  }
  const wrapper = /*#__PURE__*/React.createElement("button", {
    onClick: whenClicked.bind(this, "Di Klik")
  }, "Click Me");
  root.render(wrapper);
}
box();