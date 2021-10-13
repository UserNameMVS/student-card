export const validator = (data, config) => {
  const errors = {}

  function validate(validateMethod, data, config) {
    let statusValidate

    switch (validateMethod) {
      case 'isRequired': {
        statusValidate = data.trim() === ''
        break
      }

      case 'isCurrentYear': {
        statusValidate = +data >= new Date().getFullYear()
        break
      }

      case 'isOnlyDigitAndLengthFour': {
        const digitRegExp = /\d{4,4}/g
        statusValidate = !digitRegExp.test(data)
        break
      }

      case 'isURL': {
        const urlRegExp = /^(https):\/\/\S+\.\S+$/g
        statusValidate = !urlRegExp.test(data)
        break
      }

      default:
        break
    }

    if (statusValidate) return config.message
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }

  return errors
}
