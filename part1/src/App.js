const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app, created during the <a href='https://fullstackopen.com/en/part1/introduction_to_react'>Fullstack course</a>.
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="Paul" age={10 + 23} />
      <Footer />
    </div>
  )
}

export default App
