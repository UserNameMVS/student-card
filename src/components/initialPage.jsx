import React from 'react'
import AddCard from '../layouts/addCard'
import Card from '../layouts/card'

function App() {
  const card = window.localStorage.getItem('student')

  return (
    <div className="App">
      <div className="container">
        {card ? <Card /> : <AddCard />}
      </div>
    </div>
  )
}

export default App
