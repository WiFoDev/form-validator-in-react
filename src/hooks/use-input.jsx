import { useReducer } from 'react'

const defaultState = {
  value: '',
  touched: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'Change':
      return {
        value: action.value,
        touched: false,
      }
    case 'Blur':
      return {
        value: state.value,
        touched: true,
      }
    case 'Reset':
      return defaultState
  }

  return defaultState
}

export const useInput = (validate) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const isValueValid = validate(state.value)
  const hasError = !isValueValid && state.touched

  const valueChangeHandler = (evt) => {
    dispatch({ type: 'Change', value: evt.target.value })
  }

  const inputTouchedHandler = () => {
    dispatch({ type: 'Blur' })
  }

  const reset = () => {
    dispatch({ type: 'Reset' })
  }

  return {
    value: state.value,
    hasError,
    valueChangeHandler,
    inputTouchedHandler,
    reset,
  }
}
