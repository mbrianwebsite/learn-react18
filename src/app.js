const root = ReactDOM.createRoot(document.getElementById("root"));
function box() {
  const wrapper = (
    <button
      onClick={function () {
        alert(1);
      }}
    >
      Click Me
    </button>
  );
  root.render(wrapper);
}
box();
