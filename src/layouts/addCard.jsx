import React from 'react'
import { Link } from 'react-router-dom'

const AddCard = ({ ...rest }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4 mt-4 ">
          <h1 className="mb-4">Карточка студента</h1>
          <p>Нет данных</p>
          <Link to="/createCard" className="btn btn-primary" {...rest}>
            Добавить
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddCard
