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
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
          <script type="text/JavaScript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        </div>
        
  );
}

export default App;
