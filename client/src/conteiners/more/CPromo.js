import Promo from '../../components/more/Promo'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPromo } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      promo: state.promo,
    }
}
const mapDispatchToProps = dispatch => {
  return {
    getPromo: id => dispatch(getPromo(id))
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Promo))