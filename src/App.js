import React from "react";
import './css/App.css';
import Header from "./components/header";
import ProjectList from "./components/projectlist";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectList />
    </div>
  );
}

export default App;
