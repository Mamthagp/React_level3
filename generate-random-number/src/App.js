import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './components/Home'
import UsersList from './components/Users/UsersList'
import NumbersContainer from './components/NumbersApp/NumbersContainer'

function App(props) {
  return (
    <div>
      <h1>Random Number Generator</h1>
      <NumbersContainer />
      
      <div>
        <Link to="/">Home</Link> | 
        <Link to="/users">Users</Link>

        <Route path="/" component={Home} exact={true}/> 
        <Route path="/users" component={UsersList} exact={true}/>
      </div>
    </div>
  );
}

export default App;
