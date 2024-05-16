import React from "react";
import { Route, Link, Switch } from "wouter";
import CountryDetails from "./components/CountryDetails";
import NavbarC from "./components/Navbar"
import { CountryList } from "./pages/CountryList";
import "./App.css"

const Home = () => {
  return (
    <div>
      <NavbarC/>
      <section className="center">
        <div className="title">
          <h1>Welcome to Worldwide Country Viewer</h1>
        </div>
      <p>View all Countries countries here:</p>
      <Link href="/list">View Countries</Link>
      </section>
    </div>
  );
};

const App = () => {

  return (
      <Switch>
        <main className="blackBackground">
          <Route path="/" component={Home} />
          <Route path="/list" component={CountryList} />
          <Route path="/country/:countryName" component={CountryDetails} />
        </main>
      </Switch>
  );
};

export default App;
