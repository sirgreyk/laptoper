import List from '../../components/user/List'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleReview, getUserList } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      userList: state.userList,
      user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
  return {
      handleReview: (open) => dispatch(handleReview(open)),
      getUserList: list => dispatch(getUserList(list)),
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(List))