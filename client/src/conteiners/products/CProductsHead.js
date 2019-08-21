import ProductsHead from '../../components/products/ProductsHead'
import { connect } from 'react-redux'
import { setView } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      view: state.view,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setView: (bool) => dispatch(setView(bool)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsHead)