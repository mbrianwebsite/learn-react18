const root = ReactDOM.createRoot(document.getElementById("root"));
function box() {
  const className = "rounded";
  const wrapper = (
    <div
      className={className}
      style={{
        width: 200,
        height: 200,
        backgroundColor: "blue",
      }}
    ></div>
  );
  root.render(wrapper);
}
box();
