import Bar from '../../components/bars/Bar'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleCart } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
}

const mapDispatchToProps = dispatch => {
  return {
      handleCart: (open) => dispatch(handleCart(open)),
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Bar))