import React from "react";
import { Route, Link, Switch } from "wouter";
import CountryListComponent from "./components/CountryListComponent";
import CountryDetails from "./components/CountryDetails";

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
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cards" component={CountryListComponent} />
      <Route path="/country/:countryName" component={CountryDetails} />
    </Switch>
  );
};

export default App;
