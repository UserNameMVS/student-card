import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Card from './layouts/card'
import initialPage from './components/initialPage'
import CreateCard from './layouts/createCard'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/student" component={Card} />
        <Route path="/createCard" component={CreateCard} />
        <Route path="/" component={initialPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
