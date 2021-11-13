import React from 'react';
import {Container, Row } from 'react-bootstrap';
import useFeatureItem from '../../../Hooks/userFeatureItem';
import HomeProductShow from './AllProductsShow';

const AllProducts = () => {

    const [homeItem] = useFeatureItem();

    return (
        <Container className="my-5 pb-5">
            <div className="">
                <h3 style={{fontFamily:"fantasy", fontSize:"2em", letterSpacing:"2px",textDecoration:"underline", marginBottom:"20px"}}>All Product</h3>
            </div>
            <Row>
                {
                    homeItem.map ( hitem => <HomeProductShow
                        key= {hitem._id}
                        hitem = {hitem}
                    ></HomeProductShow>).slice(0,6)
                }
            </Row>
        </Container>
    );
};

export default AllProducts;