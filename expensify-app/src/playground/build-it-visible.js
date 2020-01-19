class VisibilityToggles extends React.Component {
  constructor() {
    super()
    this.toggleSetter = this.toggleSetter.bind(this)
    this.state = {
      togle: true
    }
  }

  toggleSetter() {
    this.setState((prevState) => {
      return {
        togle: !prevState.togle
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Some text</h1>
        <button onClick={this.toggleSetter}>show</button>
        <p hidden={this.state.togle}>some paragraph</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggles />, document.getElementById('app'))

// const appRoot = document.getElementById('app')

// var togle = true
// const toggleSetter = () => {
//   togle = togle? false: true

//   renderApp()
// }

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Some text</h1>
//       <button onClick={toggleSetter}>show</button>
//       <p hidden={togle}>some paragraph</p>
//     </div>
//   )

//   ReactDOM.render(template, appRoot)
// }

// renderApp()