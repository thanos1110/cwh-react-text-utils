import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
function App() {
  return (
    <>
      <div className="App">
        <Header title="Text-Utils" dropDown={false} />
        {/* <Header /> */}
        <Login />
      </div>
    </>
  );
}

export default App;
