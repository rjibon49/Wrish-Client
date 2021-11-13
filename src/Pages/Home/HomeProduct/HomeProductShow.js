import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeProductShow = ({hitem}) => {
    const {_id, itemName, price, image} = hitem;
    return (
        <Col xs={12} md={3}>
            <Row className="mx-1 border border-dark border-2 rounded my-3">

                    <Image src={image} style={{width:"100%", height:"auto"}} />
                <div className="text-center mb-3">
                    <Link to={`/feature/${_id}`} className="text-decoration-none"> <h5>{itemName}</h5> </Link>
                    <h6>Price: {price}TK</h6>
                    <Link to={`/feature/${_id}`} className="text-decoration-none"> <button className="btn btn-primary mt-3">More Details</button> </Link>
                </div>
            </Row>
        </Col>
    );
};

export default HomeProductShow;