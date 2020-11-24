import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Game from "../Game/Game";
import Landing from "../Landing/Landing";
import ApiContext from "../../contexts/ApiContext";
import Header from "../Header/Header";
import About from "../About/About";
import NotFound from "../NotFound/NotFound"
import ErrorBoundary from "../../ErrorBoundary"


export default class App extends Component {


  // state = {
  // }




  renderMainRoutes() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }


  render() {
    const value = {
      test: 0
    }
    return (
      <ErrorBoundary>

        <div className="all">
          <ApiContext.Provider value={value}>

            <div className="App">
              <header className="App__header">
                <Header />
              </header>
              <main className="App__main"> {this.renderMainRoutes()} </main>
            </div>
          </ApiContext.Provider>
        </div>
      </ErrorBoundary>


    )
  }
}