// Write your code here
import {Component} from 'react'

import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isloggedin: false}

  onClickButton = () => {
    this.setState(prevState => ({isloggedin: !prevState.isloggedin}))
  }

  render() {
    const {isloggedin} = this.state

    return (
      <div className="home-container">
        <div className="card-container">
          <Message isloggedin={isloggedin} />
          {isloggedin ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
