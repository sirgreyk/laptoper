import Main from '../../components/main/Main'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getLaptoper } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      laptoper: state.laptoper,
      popular: state.mpopular,
      latest: state.mlatest,
      recomend: state.mrecomend,
    }
}
const mapDispatchToProps = dispatch => {
  return {
    getLaptoper: () => dispatch(getLaptoper())
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Main))