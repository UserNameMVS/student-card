import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ label, type, name, value, onChange, error, min, max }) => {
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : ' is-valid')
  }

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          className={getInputClasses()}
          type={type}
          id={name}
          value={value}
          name={name}
          onChange={onChange}
          {...(type === 'number' && (min = { min }))}
          {...(type === 'number' && (max = { max }))}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )
}

TextField.defaultProps = {
  type: 'text'
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number
}

export default TextField
