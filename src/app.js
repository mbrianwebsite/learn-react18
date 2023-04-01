const root = ReactDOM.createRoot(document.getElementById("root"));
function tick() {
  const wrapper = (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: "blue",
      }}
    ></div>
  );
  root.render(wrapper);
}
tick();
