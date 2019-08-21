import Cart from '../../components/cart/Cart'
import { connect } from 'react-redux'
import { handleCart } from '../../actions/actionCreators';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
      open: state.handleCart,
      cart: state.cart
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
)(Cart))