import React from "react";
import { Route, Link } from "wouter";
import CountryListComponent from "./components/CountryListComponent";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Worldwide Country Viewer</h1>
      <p>View all Countries flags here:</p>
      <Link href="/cards">View Flags</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/cards" component={CountryListComponent} />
    </div>
  );
};

export default App;
