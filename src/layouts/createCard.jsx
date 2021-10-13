import React, { useState, useEffect } from 'react'
import { validator } from '../utils/validator'

import Modal from '../components/UI/modal'
import { Link } from 'react-router-dom'
import Form from '../components/form'

const CreateCard = () => {
  const [data, setData] = useState({ firstName: '', lastName: '', yearOfBirth: '', portfolio: '' })
  const [errors, setErrors] = useState({})
  const [modal, setModal] = useState(false)

  const localData = JSON.parse(window.localStorage.getItem('student'))

  useEffect(() => {
    setData((prevState) => ({ ...prevState, ...localData }))
  }, [])

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const validatorConfig = {
    firstName: {
      isRequired: { message: 'Поле "Имя" обязательно для заполнения' },
      isOnlyLetter: { message: 'Поле "Имя" должно содержать только буквы' }
    },
    lastName: {
      isRequired: { message: 'Поле "Фамилия" обязательно для заполнения' },
      isOnlyLetter: { message: 'Поле "Фамилия" должно содержать только буквы' }
    },
    yearOfBirth: {
      isRequired: { message: 'Поле "Год рождения" обязательно для заполнения' },
      isCurrentYear: { message: 'Год рождения не может быть больше или равен текущему году' },
      isOnlyDigitAndLengthFour: { message: 'Допустимо только 4-х значное число' }
    },
    portfolio: {
      isRequired: { message: 'Поле "Порфолио" обязательно для заполнения' },
      isURL: { message: 'Адрес ссылки введен не корректно' }
    }
  }

  useEffect(() => validate(), [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)

    return !Object.keys(errors).length
  }

  const isValid = !Object.keys(errors).length

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    window.localStorage.setItem('student', JSON.stringify(data))
    setModal(true)
  }

  const handleModalClose = () => {
    setModal(false)
  }

  return (
    <div>
      <div className="container">
        <Modal visible={modal} setVisible={setModal}>
          <div>
            <h5>Обновлено!</h5>
            <hr />
            <div className="d-flex justify-content-end">
              <Link
                to="/"
                onClick={handleModalClose}
                className="btn btn-link fw-bolder"
                style={{ textDecoration: 'none' }}>
                Close
              </Link>
            </div>
          </div>
        </Modal>
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            <h3 className="mb-4">{localData ? 'Редакировать' : 'Создать'}</h3>
            <Form
              data={data}
              errors={errors}
              isValid={isValid}
              onChange={handleChange}
              onSubmit={handleSubmit}>
              <div>
                {localData && (
                  <Link to="/" onClick={handleModalClose} className="btn btn-secondary me-2">
                    Назад
                  </Link>
                )}
                <button className="btn btn-primary" type="submit" disabled={!isValid}>
                  {localData ? 'Обновить' : 'Создать'}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCard
