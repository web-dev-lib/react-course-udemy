class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.plusHandler = this.plusHandler.bind(this)
    this.minusHandler = this.minusHandler.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
    this.state = {
      count: 0
    }
  }

  plusHandler() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  minusHandler() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  resetHandler() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.plusHandler}>+1</button>
        <button onClick={this.minusHandler}>-1</button>
        <button onClick={this.resetHandler}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0
// const addOne = () => {
//   count++
//   console.log('addOne', count)
//   renderCounterApp()
// }
// const minusOne = () => {
//   count--
//   console.log('minusOne')
//   renderCounterApp()
// }
// const reset = () => {
//   count = 0
//   console.log('reset')
//   renderCounterApp()
// }


// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )

//   ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()