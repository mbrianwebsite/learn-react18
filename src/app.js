const root = ReactDOM.createRoot(document.getElementById("root"));
function box() {
  function whenClicked() {
    alert(1);
  }
  const wrapper = <button onClick={whenClicked}>Click Me</button>;
  root.render(wrapper);
}
box();
