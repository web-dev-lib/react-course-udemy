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

  componentDidMount() {
    const localCount = localStorage.getItem('count')

    if(localCount) {
      this.setState(() => ({ count: parseInt(localCount) }))
    }
  }

  componentDidUpdate() {
    localStorage.setItem('count', this.state.count)
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

Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'))
