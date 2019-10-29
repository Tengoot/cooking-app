import React from 'react';
import Header from './lib/header'
import SignInComponent from './lib/signInComponent'
import SignUpComponent from './lib/signUpComponent'
import SignOutComponent from './lib/signOutComponent'
import RecipeList from './lib/recipeList'
import Recipe from './lib/recipe'
import Ingredient from './lib/ingredient'
import Footer from './lib/footer'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
              <Route exact path="/sign-in/" component={SignInComponent}>
                {localStorage.getItem('signedIn') ? <Redirect to="/recipes/" /> : <SignInComponent />}
              </Route>
              <Route exact path="/sign-up/" component={SignUpComponent} />
              <Route exact path="/sign-out/" component={SignOutComponent}/>
              <Route exact path="/recipes/" component={RecipeList} />
              <Route exact path="/recipes/:id" component={Recipe} />
              <Route exact path="/ingredients/:id" component={Ingredient} />
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
