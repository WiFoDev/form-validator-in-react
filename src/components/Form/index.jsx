import { form, input, button, label } from './styles.module.css'

export const Form = () => {
  return (
    <form className={form}>
      <label className={label} htmlFor="name">
        Your Name
      </label>
      <input className={input} id="name" type="text" />
      <label className={label} htmlFor="email">
        Your Email
      </label>
      <input className={input} id="email" type="text" />
      <button className={button}>Submit</button>
    </form>
  )
}
