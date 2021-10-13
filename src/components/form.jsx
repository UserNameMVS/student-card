import React from 'react'
import PropTypes from 'prop-types'

import TextField from './textField'

const Form = ({ data, errors, children, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Имя"
        type="text"
        name="firstName"
        value={data.firstName}
        onChange={onChange}
        error={errors.firstName}
      />
      <TextField
        label="Фамилия"
        type="text"
        name="lastName"
        value={data.lastName}
        onChange={onChange}
        error={errors.lastName}
      />
      <TextField
        label="Год рождения"
        type="number"
        name="yearOfBirth"
        value={data.yearOfBirth}
        onChange={onChange}
        error={errors.yearOfBirth}
        min={1900}
        max={new Date().getFullYear() - 1}
      />
      <TextField
        label="Портфолио"
        type="text"
        name="portfolio"
        value={data.portfolio}
        onChange={onChange}
        error={errors.portfolio}
      />
      {children}
    </form>
  )
}

Form.propTypes = {
  data: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Form
