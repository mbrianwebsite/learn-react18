const root = ReactDOM.createRoot(document.getElementById("root"));
function tick() {
  const wrapper = (
    <div>
      <h1>Jam Sekarang</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(wrapper);
}
tick();
setInterval(function () {
  tick();
}, 1000);
