import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import App from './pages/Url/App';
import Hehe from './pages/hehe';
import Cadastro from './pages/cadastro'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/hehe' exact component={Hehe}/>
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path='/url' exact component={App} />
      </Switch>
    </BrowserRouter>

    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

