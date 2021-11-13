import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviewsData, setReviewsData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then ( res => res.json())
        .then ( data => setReviewsData(data));
    },[])
    
    return [reviewsData];
}

export default useReviews;