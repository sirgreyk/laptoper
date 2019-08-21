import ProductsGrid from '../../components/products/ProductsGrid'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleReview, getProducts } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      products: state.products,
      view: state.view,
    }
}

const mapDispatchToProps = dispatch => {
  return {
      handleReview: (open) => dispatch(handleReview(open)),
      getProducts: () => dispatch(getProducts())
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsGrid))