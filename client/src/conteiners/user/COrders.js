import Orders from '../../components/user/Orders'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getUserOrders } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      userOrders: state.userOrders,
      user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserOrders: () => dispatch(getUserOrders()),
  }
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Orders))