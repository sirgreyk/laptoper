import Post from '../../components/more/Post'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPost } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      post: state.post
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => dispatch(getPost(id)),
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Post))