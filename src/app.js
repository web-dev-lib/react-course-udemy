let app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two'],
}

let template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0
        ? <p>Options</p>
        : <p>No options</p>
    }
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)

let user = {
  name: 'Sergei',
  age: 28,
  location: 'Moscow',
}

let templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
