import Lists from '../../components/user/Lists'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectList } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
  return {
      selectList: list => dispatch(selectList(list)),
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Lists))