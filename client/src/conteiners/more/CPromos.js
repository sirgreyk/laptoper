import Promos from '../../components/more/Promos'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPromos } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      promos: state.promos
    }
}
const mapDispatchToProps = dispatch => {
  return {
    getPromos: () => dispatch(getPromos()),
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Promos))