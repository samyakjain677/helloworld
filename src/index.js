import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Hiration Interns</h1>
      <h2>Lets create some miracle!</h2>
      <HelloWorld />
    </div>
  );
}
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
