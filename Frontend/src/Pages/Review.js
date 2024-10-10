import React, { useState, useEffect } from 'react';
import '../Style/Review.css';

export function Review() {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "Harvi Patel",
            review: "Had an amazing experience with Heaven Tours! Highly recommend!",
            rating: 5
        },
        {
            id: 2,
            name: "Hetvi Patel",
            review: "Great service and friendly staff. Will definitely book again!",
            rating: 5
        }
    ]);

    const [newReview, setNewReview] = useState({ name: '', review: '', rating: 5 });

    useEffect(() => {
        // Load existing reviews from localStorage when the component mounts
        const storedReviews = JSON.parse(localStorage.getItem('reviews'));
        if (storedReviews) {
            setReviews(storedReviews);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedReviews = [...reviews, { id: reviews.length + 1, ...newReview }];
        setReviews(updatedReviews);
        localStorage.setItem('reviews', JSON.stringify(updatedReviews)); // Save to localStorage
        setNewReview({ name: '', review: '', rating: 5 });
    };

    return (
        <div className="review-page-container">
            <h2 className="review-title">Customer Reviews</h2>

            <div className="reviews-list">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <h4>{review.name}</h4>
                        <p>{review.review}</p>
                        <p>Rating: {review.rating} / 5</p>
                    </div>
                ))}
            </div>

            <h3 className="review-form-title">Leave a Review</h3>
            <form onSubmit={handleSubmit} className="review-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={newReview.name}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="review"
                    placeholder="Your Review"
                    value={newReview.review}
                    onChange={handleChange}
                    required
                />
                <select name="rating" value={newReview.rating} onChange={handleChange}>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                </select>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}
