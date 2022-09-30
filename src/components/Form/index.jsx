import { useState } from 'react'

import { form, input, button, label, invalid__input, invalid__text } from './styles.module.css'

const DEFAULT_FORM_STATE = {
  name: '',
  email: '',
}

export const Form = () => {
  const [userInputs, setUserInputs] = useState(DEFAULT_FORM_STATE)
  const [inputTouched, setInputTouched] = useState({
    name: false,
    email: false,
  })

  const inputNameValid = userInputs.name.trim() !== ''
  const isInputNameValid = inputNameValid || !inputTouched.name

  const inputEmailValid = userInputs.email.includes('@')
  const isInputEmailValid = inputEmailValid || !inputTouched.email

  const nameChangeHandler = (evt) => {
    setInputTouched((prevState) => {
      return {
        ...prevState,
        name: false,
      }
    })
    setUserInputs((prevState) => {
      return {
        ...prevState,
        name: evt.target.value,
      }
    })
  }

  const inputNameTouchedHandler = () => {
    setInputTouched((prevState) => {
      return {
        ...prevState,
        name: true,
      }
    })
  }

  const inputEmailTouchedHandler = () => {
    setInputTouched((prevState) => {
      return {
        ...prevState,
        email: true,
      }
    })
  }

  const emailChangeHandler = (evt) => {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        email: evt.target.value,
      }
    })
  }

  const submitFormHandler = (evt) => {
    evt.preventDefault()
    const { name, email } = userInputs
    const newUser = {
      name,
      email,
    }

    setUserInputs(DEFAULT_FORM_STATE)
  }

  return (
    <form className={form} onSubmit={submitFormHandler}>
      <label className={label} htmlFor="name">
        Your Name
      </label>
      <input
        className={isInputNameValid ? input : `${input} ${invalid__input}`}
        id="name"
        type="text"
        value={userInputs.name}
        onBlur={inputNameTouchedHandler}
        onChange={nameChangeHandler}
      />
      {!isInputNameValid && <p className={invalid__text}>Name must not be empty</p>}
      <label className={label} htmlFor="email">
        Your Email
      </label>
      <input
        className={isInputEmailValid ? input : `${input} ${invalid__input}`}
        id="email"
        type="text"
        value={userInputs.email}
        onBlur={inputEmailTouchedHandler}
        onChange={emailChangeHandler}
      />
      {!isInputEmailValid && <p className={invalid__text}>Provide a valid email</p>}
      <button className={button}>Submit</button>
    </form>
  )
}
