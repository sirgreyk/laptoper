import Product from '../../components/product/Product'
import { connect } from 'react-redux'
import { handleReview } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      product: state.product,
      comments: state.comments,
    }
}

const mapDispatchToProps = dispatch => {
  return {
      handleReview: (open) => dispatch(handleReview(open)),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product)