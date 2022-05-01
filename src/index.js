import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/Url/App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>

    <ToastContainer />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

