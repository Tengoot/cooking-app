import React from 'react';
import Header from './lib/header'
import RecipeList from './lib/recipeList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <div className="App-body">
          <RecipeList />
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
