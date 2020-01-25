import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import Header from './lib/header'
import Footer from './lib/footer'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const { Suspense } = React;

export default function Root(props) {
  // Defines *what* data the component needs via a query. The responsibility of
  // actually fetching this data belongs to the route definition: it calls
  // preloadQuery() with the query and variables, and the result is passed
  // on props.prepared.issuesQuery - see src/routes.js
  const data = usePreloadedQuery(
    graphql`
      query RootQuery {
        viewer {
          id
          nick
          role
        }
      }
    `,
    props.prepared.rootQuery,
  );
  const { viewer } = data;

  if (!viewer) {
    localStorage.removeItem('signedIn');
    localStorage.removeItem('role');
  }

  if (viewer && !localStorage.getItem('signedIn')) {
    localStorage.setItem('signedIn', viewer.id);
    localStorage.setItem('role', viewer.role);
  }

  return (
    <div className="App">
      <header>
        <Header viewer={viewer} />
      </header>
      <main>
          <div className="App-body">
            <Suspense fallback={'Loading...'}>{props.children}</Suspense>
            <ToastContainer />
          </div>
      </main>
      <footer>
          <Footer />
        </footer>
    </div>
  );
}