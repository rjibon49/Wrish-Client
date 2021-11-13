import React from 'react';
import {Container, Row } from 'react-bootstrap';
import useFeatureItem from '../../../Hooks/userFeatureItem';
import HomeProductShow from './HomeProductShow';

const HomeProduct = () => {

    const [homeItem] = useFeatureItem();

    return (
        <Container className="my-5 pt-5">
            <div className="">
                <h3 style={{fontFamily:"fantasy", fontSize:"2em", letterSpacing:"2px",textDecoration:"underline", marginBottom:"20px"}}>Leatest Product</h3>
            </div>
            <Row>
                {
                    homeItem.map ( hitem => <HomeProductShow
                        key= {hitem._id}
                        hitem = {hitem}
                    ></HomeProductShow>).slice(0,4)
                }
            </Row>
        </Container>
    );
};

export default HomeProduct;