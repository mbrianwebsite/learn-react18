const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  const state = React.useState(0);

  const count = state[0];
  const setCount = state[1];
  return (
    <>
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        -
      </button>
    </>
  );
}
root.render(<App />);
