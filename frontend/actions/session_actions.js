import * as APIUtil from '../util/session_api_util'


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

export const receiveCurrentUser = (payload) => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload
    }
}

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const login = (user) => (dispatch) => (
    APIUtil.login({session: user}).then(
        payload => {
            dispatch(receiveCurrentUser(payload))
            return payload}
            ).fail(
                err => {
                    dispatch(receiveErrors(err.responseJSON))
                }
            )
)

export const logout = () => (dispatch) => {
    return APIUtil.logout().then(dispatch(logoutCurrentUser()))
}

export const signup = (user) => (dispatch) => (
    APIUtil.signup( { user: user } ).then(payload => {
        dispatch(receiveCurrentUser(payload));
        return payload }
        ).fail(
            err => {
                dispatch(receiveErrors(err.responseJSON))
            }
        )
)








// {
//     return APIUtil.signup({user: user}).then(payload => dispatch(receiveCurrentUser(payload)))
// }