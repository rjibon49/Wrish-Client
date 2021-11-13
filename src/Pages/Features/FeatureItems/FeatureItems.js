import React from 'react';
import {Container, Row } from 'react-bootstrap';
import useFeatureItem from '../../../Hooks/userFeatureItem';
import FeatureItem from './FeatureItem';

const FeatureItems = () => {

    const [featureItems] = useFeatureItem();

    return (
        <Container className="my-5">
            <Row>
                {
                    featureItems.map ( featureItem => <FeatureItem
                        key= {featureItem._id}
                        featureItem = {featureItem}
                    ></FeatureItem>)
                }
            </Row>
        </Container>
    );
};

export default FeatureItems;