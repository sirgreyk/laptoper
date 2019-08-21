import ReviewAdd from '../../components/product/ReviewAdd'
import { connect } from 'react-redux'
import { handleReview } from '../../actions/actionCreators';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
      open: state.handleReview,
      product: state.product,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleReview: (open) => dispatch(handleReview(open)),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewAdd))