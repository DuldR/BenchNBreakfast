import { connect } from 'react-redux'
import Greeting from './greeting'
import { logout } from '../../actions/session_actions'

const mapStateToProps = state => {

    const {users} = state.entities
 

    return { currentUser: users[state.session.id] }
}

const mapDispatchToProps = dispatch => ({

    logout: () => dispatch(logout())

})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)