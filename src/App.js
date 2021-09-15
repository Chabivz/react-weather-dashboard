import "./App.css";
// -------------------------------------------------------
import React from "react";

import Cards from './Components/Cards';
import Weather from './Components/Weather';
import SearchBar from './Components/SearchBar';


function App() {
  return (
        <div>
          <Weather />
          <SearchBar />
          <Cards />
        </div>
        
  );
}

export default App;
