const root = ReactDOM.createRoot(document.getElementById("root"));
function box() {
  function whenClicked(arg) {
    alert(arg);
  }
  const wrapper = (
    <button
      onClick={function () {
        whenClicked("Di Klik");
      }}
    >
      Click Me
    </button>
  );
  root.render(wrapper);
}
box();
