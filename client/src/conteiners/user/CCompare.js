import CompareMob from '../../components/user/CompareMob'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
      compare: state.compare,
    }
}

export default connect(
    mapStateToProps,
    null
)(CompareMob)