import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }

}

export default App
