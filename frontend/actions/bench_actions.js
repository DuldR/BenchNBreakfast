import * as APIUtil from '../util/util_benches'

export const RECEIVE_BENCHES = "RECEIVE_BENCHES"
export const RECEIVE_ONE_BENCH = "RECEIVE_ONE_BENCH"
export const START_LOADING_ALL_BENCHES = "START_LOADING_ALL_BENCHES"
export const START_LOADING_ONE_BENCH = "START_LOADING_ONE_BENCH"


export const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
}

export const receiveOneBench = (bench) => {
    return {
        type: RECEIVE_ONE_BENCH,
        bench
    }
}

export const startLoadingAllBenches = () => ({
    type: START_LOADING_ALL_BENCHES
});

export const startLoadingOneBench = () => ({
    type: START_LOADING_ONE_BENCH
});

export const fetchBenches = (filters) => (dispatch, getState) => {
    return APIUtil.getBenches(filters).then(benches => {
        if (getState().ui.loaded.indexLoading === false) {
            dispatch(startLoadingAllBenches())
        }
        dispatch(receiveBenches(benches))
    })
}

export const fetchOneBench = (bench) => (dispatch, getState) => {
    return APIUtil.getOneBench(bench).then(bench => {
        dispatch(startLoadingOneBench())
        dispatch(receiveOneBench(bench))
        return bench
        
    })
}

export const createBench = (bench) => dispatch => {

    return APIUtil.createBench(bench).then(
        bench => {
            dispatch(receiveOneBench(bench));
            return bench
        }
    )
}

