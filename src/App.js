import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./screens/Home";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <HomePage />
      </header>
    </div>
  );
}

export default App;