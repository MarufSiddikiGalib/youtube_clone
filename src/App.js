import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

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
      <BrowserRouter>
          <div className="flex flex-col h-full">
          <Header />
          <Routes>

            <Route path="/" exact element={<Feed />}/> 
            <Route path="/searchResult/:searchQuery" element={<SearchResult />}/> 
            <Route path="/video/:id" element={<VideoDetails />}/>

          </Routes>
          
          </div>
       </BrowserRouter>
    </AppContext>
  );
}

export default App;
