import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const Reviewdata = ({rd}) => {
    const { userName, reviewTitle, ratting, description} = rd;

    const ratingStar = {
        size: 24,
        edit: false
      };

    return (
        <Col xs={12} md={3} className="my-3 ">
            <div style={{backgroundColor:"#6e6a54",padding:"15px 0px", borderRadius:"10px" }}>
                <div className="text-center text-white">
                    <h4>{userName}</h4>
                    <h6>{reviewTitle}</h6>
                    <span><ReactStars {...ratingStar} value={ratting} classNames="mx-auto"/></span>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    );
};

export default Reviewdata;