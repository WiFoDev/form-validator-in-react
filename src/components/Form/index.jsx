import { useInput } from '../../hooks/use-input'

import {
  form,
  input,
  button,
  label,
  invalid__input,
  invalid__text,
  button__disabled,
} from './styles.module.css'

export const Form = () => {
  const {
    value: inputName,
    hasError: inputNameHasError,
    valueChangeHandler: inputNameChangeHandler,
    inputTouchedHandler: inputNameTouchedHandler,
    reset: resetInputName,
  } = useInput((value) => value.trim() !== '')

  const {
    value: inputEmail,
    hasError: inputEmailHasError,
    valueChangeHandler: inputEmailChangeHandler,
    inputTouchedHandler: inputEmailTouchedHandler,
    reset: resetInputEmail,
  } = useInput((value) => value.includes('@'))

  const isFormValid = !inputNameHasError && !inputEmailHasError

  const submitFormHandler = (evt) => {
    evt.preventDefault()

    if (!isFormValid) return

    const newUser = {
      inputName,
      inputEmail,
    }

    console.log(newUser)
    resetInputName()
    resetInputEmail()
  }

  return (
    <form className={form} onSubmit={submitFormHandler}>
      <label className={label} htmlFor="name">
        Your Name
      </label>
      <input
        className={!inputNameHasError ? input : `${input} ${invalid__input}`}
        id="name"
        type="text"
        value={inputName}
        onBlur={inputNameTouchedHandler}
        onChange={inputNameChangeHandler}
      />
      {inputNameHasError && <p className={invalid__text}>Name must not be empty</p>}
      <label className={label} htmlFor="email">
        Your Email
      </label>
      <input
        className={!inputEmailHasError ? input : `${input} ${invalid__input}`}
        id="email"
        type="text"
        value={inputEmail}
        onBlur={inputEmailTouchedHandler}
        onChange={inputEmailChangeHandler}
      />
      {inputEmailHasError && <p className={invalid__text}>Provide a valid email</p>}
      <button
        className={isFormValid ? button : `${button} ${button__disabled}`}
        disabled={!isFormValid}
      >
        Submit
      </button>
    </form>
  )
}
