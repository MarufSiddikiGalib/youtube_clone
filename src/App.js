import React from "react";
import './App.css';
import {AppContext} from "./context/contextApi";
function App() {
  return (
    <AppContext>
    <div className="text-5xl text-center text-red-500">App</div>
    </AppContext>
  );
}

export default App;
