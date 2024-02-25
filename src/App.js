import React from "react";
import './App.css';
import {AppContext} from "./context/contextApi";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import LeftNav from "./Components/LeftNav";
import LeftNavMenu from "./Components/LeftNavMenu";
import SearchResult from "./Components/SearchResult";
import SearchResultVideoCard from "./Components/SearchResultVideoCard";
import SuggestionVideoCard from "./Components/SuggestionVideoCard";
import VideoCard from "./Components/VideoCard";
import VideoDetails from "./Components/VideoDetails";

function App() {
  return (
    <AppContext>
    <div className="text-5xl text-center text-red-500">App</div>
    </AppContext>
  );
}

export default App;
