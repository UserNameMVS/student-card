import React from 'react'
import { Link } from 'react-router-dom'
import { declOfNum } from '../utils/declination'

const Card = () => {
  const { firstName, lastName, yearOfBirth, portfolio } = JSON.parse(
    window.localStorage.getItem('student')
  )
  const age = new Date().getFullYear() - yearOfBirth
  const phrase = declOfNum(age, ['год', 'года', 'лет'])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4 mt-4">
          <h1>Карточка студента</h1>
          <div>
            <b>Имя: </b> {firstName}
          </div>
          <div>
            <b>Фамилия: </b> {lastName}
          </div>
          <div>
            <b>Год рождения: </b> {`${yearOfBirth} (${age} ${phrase})`}
          </div>
          <div>
            <b>Порфолио: </b> <a href={portfolio}>{portfolio}</a>
          </div>
          <Link to='/createCard' className="btn btn-primary mt-3">Редакировать</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
