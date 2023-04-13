// Write your code here
import './index.css'

const Message = props => {
  const {isloggedin} = props
  const message = isloggedin ? 'Welcome user' : 'please Login'
  return <h1 className="message">{message}</h1>
}

export default Message
