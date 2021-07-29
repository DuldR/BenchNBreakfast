import React from 'react'
import { ReviewIndexItem } from './review_index_item'


class ReviewIndex extends React.Component {

    constructor(props) {
        super(props)
        // console.log(props.reviews)
    }


    render() {

        if (this.props.loaded === false) { return <h1>Loading</h1>}

        const reviews = this.props.reviews.map((review, idx) => {
            return <ReviewIndexItem comment={review.comment} rating={review.rating} key={"review-item-" + idx} />
        })


        return (
            <ul className={"review-list"}>
                {reviews}
            </ul>
        )
    }
}

export default ReviewIndex