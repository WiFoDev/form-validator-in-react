import { useState } from 'react'

import { form, input, button, label } from './styles.module.css'

const DEFAULT_FORM_STATE = {
  name: '',
  email: '',
}

export const Form = () => {
  const [userInputs, setUserInputs] = useState(DEFAULT_FORM_STATE)

  const nameChangeHandler = (evt) => {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        name: evt.target.value,
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
        className={input}
        id="name"
        type="text"
        value={userInputs.name}
        onChange={nameChangeHandler}
      />
      <label className={label} htmlFor="email">
        Your Email
      </label>
      <input
        className={input}
        id="email"
        type="text"
        value={userInputs.email}
        onChange={emailChangeHandler}
      />
      <button className={button}>Submit</button>
    </form>
  )
}
