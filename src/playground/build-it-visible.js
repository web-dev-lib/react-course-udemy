const appRoot = document.getElementById('app')

var togle = true
const toggleSetter = () => {
  togle = togle? false: true

  renderApp()
}

const renderApp = () => {
  const template = (
    <div>
      <h1>Some text</h1>
      <button onClick={toggleSetter}>show</button>
      <p hidden={togle}>some paragraph</p>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()