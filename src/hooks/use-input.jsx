import { useState } from 'react'

export const useInput = (validate) => {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const isValueValid = validate(value)
  const hasError = !isValueValid && touched

  const valueChangeHandler = (evt) => {
    setTouched(false)
    setValue(evt.target.value)
  }

  const inputTouchedHandler = () => {
    setTouched(true)
  }

  const reset = () => {
    setValue('')
    setTouched(false)
  }

  return {
    value,
    hasError,
    valueChangeHandler,
    inputTouchedHandler,
    reset,
  }
}
