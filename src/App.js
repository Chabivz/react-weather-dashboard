import logo from "./logo.svg";
import "./App.css";
// -------------------------------------------------------
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@pollo/client";

import { SearchBar, Weather, Cards } from './Components';


function App() {
  return (
    <ApolloProvider>
      <Router>
        <div>
          <Weather />
          <SearchBar />
          <Cards />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
