export const toObj = (benches) => {

    if (Object.entries(benches).length === 0) return {}
    let returnObj = {}

    benches.forEach(bench => {
        returnObj[bench.id] = bench
    })

    return returnObj

}

export const selectAllReviews = (state) => {
    return Object.values(state.entities.reviews)
}

export const selectAllBenches = (state) => {

    return Object.values(state.entities.benches)
}

export const selectAllUsers = (state) => {
    return Object.values(state.entities.users)
}