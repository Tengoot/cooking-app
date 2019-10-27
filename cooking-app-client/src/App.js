import React from 'react';
import Header from './lib/header'
import RecipeList from './lib/recipeList'
import Footer from './lib/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from './lib/notFoundPage'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={RecipeList} />
              <Route exact path="/recipes/:id" component={RecipeList} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
