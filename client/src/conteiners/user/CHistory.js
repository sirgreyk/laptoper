import History from '../../components/user/History'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getUserHistory } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      userHistory: state.userHistory,
      user: state.user
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserHistory: history => dispatch(getUserHistory(history)),
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(History))