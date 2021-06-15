import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css';
import BirthdayPerson from './Components/birthdayPerson/birthdayPerson';
import BirthdayWish from './Components/birthdayWish/birthdayWish';
import BirthdayWishDisplay from './Components/birthdayWishDisplay/birthdayWishDisplay';
import Error from './Components/Error/Error'

const App = (props) => {

  return (
    <div className="App"> 
      <Switch>
        <Route path = '/' exact component = {BirthdayPerson} />
        <Route path = {`/:${props.username}/wishes`} exact component = {BirthdayWishDisplay}/>
        <Route path = {`/:${props.username}/write-wish`} exact component = {BirthdayWish} />
        <Route component = {Error}/>
   </Switch>
    </div>

    
  );
}

const mapStateToProps = state =>{
  return{
      userName : state.userName
  }
}

export default connect(mapStateToProps)(App)