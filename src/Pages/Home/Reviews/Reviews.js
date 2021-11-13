import React from 'react';
import { Container } from 'react-bootstrap';
import useReviews from '../../../Hooks/useReviews';
import Reviewdata from './Reviewdata';

const Reviews = () => {

    const [reviewsData] = useReviews();

    return (
        <Container>
            <h3 style={{fontFamily:"fantasy", fontSize:"2em", letterSpacing:"2px",textDecoration:"underline", marginBottom:"20px"}}>Customer Review</h3>
                {
                    reviewsData.map(rd => <Reviewdata
                    key={rd._id}
                    rd={rd}
                    ></Reviewdata>)
                }
        </Container>
    );
};

export default Reviews;