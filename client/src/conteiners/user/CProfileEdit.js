import ProfileEdit from '../../components/user/ProfileEdit'
import { connect } from 'react-redux'
import { handleEdit } from '../../actions/actionCreators';

const mapStateToProps = (state) => {
    return {
      open: state.handleEdit,
      user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleEdit: (open) => dispatch(handleEdit(open)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileEdit)