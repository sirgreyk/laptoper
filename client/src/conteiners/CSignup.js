import Signup from '../components/Signup'
import { connect } from 'react-redux'
import { signup } from '../actions/actionCreators';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    signupState: state.signup,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (firstName, secondName, phoneNumber, email, password) => dispatch(signup(firstName, secondName, phoneNumber, email, password))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup))