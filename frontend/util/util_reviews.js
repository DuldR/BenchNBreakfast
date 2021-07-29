export const createReview = (review) => {

    return $.ajax({

        method: "POST",
        url: "/api/reviews",
        data: review


    })

}

export const getReviews = (bench) => {

    return $.ajax({

        method: "GET",
        url: "/api/reviews",
        data: bench
        
    })

}