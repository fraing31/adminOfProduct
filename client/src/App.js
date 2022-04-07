import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={ (routeProps) => <Main {...routeProps} />}/>
        <Route exact path="/:id" render={ (routeProps) => 
          <div>
            <Detail {...routeProps}/>
          </div> 
        }/>
        <Route path="/:id/edit" render={ (routeProps) => <Update {...routeProps}/>
          
        }/>
      </BrowserRouter>
    </div>
  );
}
export default App;


