const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  const [count, setCount] = React.useState(0);
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
