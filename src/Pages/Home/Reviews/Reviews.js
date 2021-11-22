import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useReviews from '../../../Hooks/useReviews';
import Reviewdata from './Reviewdata';

const Reviews = () => {

    const [reviewsData] = useReviews();

    return (
        <Container>
            <Row className="my-5">
            <h3 style={{fontFamily:"fantasy", fontSize:"2em", letterSpacing:"2px",textDecoration:"underline", marginBottom:"20px"}}>Customer Review</h3>
                {
                    reviewsData.map(rd => <Reviewdata
                    key={rd._id}
                    rd={rd}
                    ></Reviewdata>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;