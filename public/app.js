const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  React.useEffect(() => {
    console.log(document.getElementById("judul"));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Halo"));
}
root.render( /*#__PURE__*/React.createElement(App, null));