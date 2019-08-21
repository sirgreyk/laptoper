import Profile from '../../components/user/Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleEdit } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    handleEdit: open => dispatch(handleEdit(open)),
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile))