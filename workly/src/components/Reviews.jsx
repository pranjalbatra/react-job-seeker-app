import React from 'react';
import reviewStyles from '../scss/review.scss';

const Reviews = ({ reviews }) => {

    return (
        <div className={reviewStyles.reviewBlock}>
            {
                reviews.map((review) => (
                    <div className="text-center">
                        <img src={review.image}></img>
                        <h4>{review.companyName}</h4>
                        <h5>{review.location}</h5>
                        <blockquote>{review.review}</blockquote>
                    </div>
                ))
            }
        </div>
    )
}




export { Reviews };