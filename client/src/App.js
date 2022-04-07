import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={ (routeProps) => <Main {...routeProps} />}/>
        <Route path="/:id" render={ (routeProps) => 
          <div>
            <Detail {...routeProps}/>
          </div> 
        }/>

      </BrowserRouter>
    </div>
  );
}
export default App;


