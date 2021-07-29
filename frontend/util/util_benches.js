export const createBench = (bench) => {

    return $.ajax({
        method: "POST",
        url: "api/benches",
        data: bench,
        contentType: false,
        processData: false
    })

}

export const getBenches = (filters) => {
    return $.ajax({
        method: "GET",
        url: "api/benches",
        data: filters
    })

}

export const getOneBench = (benchId) => {
    return $.ajax({
        method: "GET",
        url: `/api/benches/${benchId}`
    })
}
