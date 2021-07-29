import { connect } from 'react-redux'
import Search from './search'
import * as Selectors from '../../reducers/selectors'
import * as Actions from '../../actions/bench_actions'
import * as Filters from '../../actions/filter_actions'

const mapStateToProps = state => ({

    benches: Selectors.selectAllBenches(state),
    maxSeating: state.ui.filters.maxSeating,
    minSeating: state.ui.filters.minSeating,
    loaded: state.ui.loaded.indexLoading,
    bounds: state.ui.filters.bounds

})

const mapDispatchToProps = dispatch => ({

    fetchBenches: (filter) => dispatch(Actions.fetchBenches(filter)),
    fetchFilter: (filter, value) => dispatch(Filters.fetchFilter(filter, value))

})

export default connect(mapStateToProps, mapDispatchToProps)(Search)