import "./App.css";
import React from 'react';
import ReactNotification from "react-notifications-component";
import UrlForm from "./components/UrlForm";
import { Container } from "./components/Container";

require('dotenv/config');

function App() {
  return (
    
      <div className="App">
        <header className="App-header">
          <Container>
            <h1>Encurtador de Urls</h1>
            <UrlForm />
          </Container>
        </header>
        <ReactNotification/>
      </div>
   
  );
}

export default App;
