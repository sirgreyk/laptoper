import App from '../components/App'
import { getUser } from '../actions/actionCreators';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)