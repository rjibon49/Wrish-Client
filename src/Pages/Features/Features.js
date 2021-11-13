import React from 'react';
import Footer from '../Shared/Footer/Footer';
import FeatureItems from './FeatureItems/FeatureItems';
import FeatureTop from './FeatureTop/FeatureTop';

const Features = () => {
    return (
        <div>
            <FeatureTop></FeatureTop>
            <FeatureItems></FeatureItems>
            <Footer />
        </div>
    );
};

export default Features;