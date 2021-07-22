import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './containers/Layout';
import Home from './containers/Home';
import Restaurant from './containers/Restaurant';
// import NotFound from '../containers/NotFound';

function App() {
  return (
    <BrowserRouter>
    {/* <Layout data={ data } loading={ loading } getService={ showService } setService={ setShowService }> */}
    <Layout>
      <Switch>
        {/* <Route exact path='/index.html' render={ () => <Home data={ data } setService={ setShowService } /> } /> */}
        <Route exact path='/' component={ Home } />
        <Route exact path='/restaurante/:id' component={ Restaurant } />
        {/* <Route component={ NotFound } /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
