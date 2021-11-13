import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviewsData, setReviewsData] = useState([]);
    useEffect(() => {
        fetch('https://hidden-taiga-98154.herokuapp.com/reviews')
        .then ( res => res.json())
        .then ( data => setReviewsData(data));
    },[])
    
    return [reviewsData];
}

export default useReviews;