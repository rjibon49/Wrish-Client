import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeatureItem = ({featureItem}) => {
    const {_id, itemName, price, image, categories} = featureItem;

    return (
        <Col xs={12} md={6}>
            <Row className="mx-3 pe-4 border border-dark border-2 rounded my-3">
                <Col xs={5} className="mb-4">
                    <Image src={image} style={{width:"100%", height:"auto"}} />
                </Col>
                <Col xs={7} className="my-auto">
                    <Link to={`/feature/${_id}`} className="text-decoration-none"> <h5>{itemName}</h5> </Link>
                    <p><small>{categories}</small></p>
                    <h6>Price: {price}TK</h6>
                    <Link to={`/feature/${_id}`} className="text-decoration-none"> <button className="btn btn-primary mt-3">More Details</button> </Link>
                </Col>
            </Row>
        </Col>
    );
};

export default FeatureItem;