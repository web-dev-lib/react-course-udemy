let template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)

let templateTwo = (
  <div>
    <h1>Sergei Komarov</h1>
    <p>Age: 28</p>
    <p>Location: Moscow</p>
  </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
