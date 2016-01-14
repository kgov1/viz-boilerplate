import React from 'react'

class HomePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleShowMessage = this.handleShowMessage.bind(this)
  }

  handleClick(e) {
    e.preventDefault()

    let newCount = this.state.count
    newCount++

    this.setState({ count: newCount })
  }

  handleShowMessage(text) {
    let textBox = this.refs.referensi
    alert(textBox.value)
  }

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <p>Count: {this.state.count}</p>
        <button type='button' onClick={this.handleClick}>Increment</button>
        <input type='text' ref='referensi' />
        <button type='button' onClick={this.handleShowMessage}>Show Message</button>
      </div>
    )
  }

}

export default HomePage
