import './styles.module.css'

export const Form = () => {
  return (
    <form>
      <label htmlFor="name">Your Name</label>
      <input id="name" type="text" />
      <label htmlFor="email">Your Email</label>
      <input id="email" type="text" />
      <button>Submit</button>
    </form>
  )
}
