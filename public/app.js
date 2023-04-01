const root = ReactDOM.createRoot(document.getElementById("root"));
function box() {
  const className = "rounded";
  const wrapper = /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width: 200,
      height: 200,
      backgroundColor: "blue"
    }
  });
  root.render(wrapper);
}
box();