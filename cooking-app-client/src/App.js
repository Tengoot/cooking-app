import React from 'react';
import Header from './lib/header'
import SignInComponent from './lib/signInComponent'
import SignUpComponent from './lib/signUpComponent'
import SignOutComponent from './lib/signOutComponent'
import RecipeList from './lib/recipeList'
import Recipe from './lib/recipe'
import RecipeEditForm from './lib/recipeEditForm'
import IngredientEditForm from './lib/ingredientEditForm'
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
          <Header signedIn={localStorage.getItem("signedIn") ? true : false} />
        </header>
        <main>
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={RecipeList} />
              <Route exact path="/sign-in/" component={SignInComponent}>
                {localStorage.getItem('signedIn') ? <Redirect to="/recipes/" /> : <SignInComponent />}
              </Route>
              <Route exact path="/sign-up/" component={SignUpComponent}>
                {localStorage.getItem('signedIn') ? <Redirect to="/recipes/" /> : <SignUpComponent />}
              </Route>
              <Route exact path="/sign-out/" component={SignOutComponent}>
                {localStorage.getItem('signedIn') ? <SignOutComponent /> : <Redirect to="/recipes/" />}
              </Route>
              <Route exact path="/recipes/" component={RecipeList} />
              <Route exact path="/recipes/:id" component={Recipe} />
              <Route exact path="/new" component={RecipeEditForm}>
                {localStorage.getItem('signedIn') ? <RecipeEditForm /> : <Redirect to="/recipes/" />}
              </Route>
              <Route exact path="/recipes/:id/edit" component={RecipeEditForm}>
                {localStorage.getItem('signedIn') ? <RecipeEditForm /> : <Redirect to="/recipes/" />}
              </Route>
              <Route exact path="/ingredients/:id" component={Ingredient} />
              <Route exact path="/ingredients/:id/edit" component={IngredientEditForm}>
                {localStorage.getItem('signedIn') ? <IngredientEditForm /> : <Redirect to="/recipes/" />}
              </Route>
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
