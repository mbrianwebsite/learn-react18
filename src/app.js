const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  React.useEffect(() => {
    console.log(document.getElementById("judul"));
  });
  return (
    <>
      <h1 id="judul">Halo</h1>
    </>
  );
}
root.render(<App />);
