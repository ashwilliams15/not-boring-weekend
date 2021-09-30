// import React, {Component, Fragment} from 'react'
// import {connect} from 'react-redux'
// import { Login, Signup } from './components/AuthForm';
// import {me} from './store'

import React from 'react';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )
}



export default withRouter(Routes)






//Old Route component
/*
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={ Login } />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    )
  }
}
*/


//If doing login stuff
/*
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))
*/