import Login from '../components/Login'
import { connect } from 'react-redux'
import { login } from '../actions/actionCreators';
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(Login))