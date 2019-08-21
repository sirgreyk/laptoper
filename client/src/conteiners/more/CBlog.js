import Blog from '../../components/more/Blog'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getBlog } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      blog: state.blog
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getBlog: () => dispatch(getBlog()),
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog))