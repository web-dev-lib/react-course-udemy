let app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: [],
}

const onFormSubmit = e => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if(option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
  } 
}

const removeOptions = e => {
  app.options = []
  renderApp()
}

let appRoot = document.getElementById('app')

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0
          ? <p>Options</p>
          : <p>No options</p>
      }
      <p>{app.options.length}</p>
      <button onClick={removeOptions}>Remove All</button>
      {
        [99, 98, 97]
      }
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

renderApp()