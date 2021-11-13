import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row, Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import FeatureModal from './FeatureModal/FeatureModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Shared/Footer/Footer';

const FeatureDetails = () => {

    const {featureId} = useParams();
    const [ featureDetails, setFeatureDetails] = useState({});
    
    const [openOrder, setOpenOrder] = useState(false);
    const handleOrderOpen = () => setOpenOrder(true);
    const handleOrderClose = () => setOpenOrder(false);

    useEffect(() => {
        const url = `https://hidden-taiga-98154.herokuapp.com/products/${featureId}`;
        fetch(url)
        .then ( res => res.json())
        .then ( data => setFeatureDetails(data));
    },[])

    const { itemName, price, image, categories, description, movement, diameter, waterResistance, gender, strap, dialColor} = featureDetails;

        const notify =() => {
            toast.success('Order Sucessfully, Check Dashboard', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });
        }

    return (
        <>
        <Container className="my-5">
            <Row>
                <Col xs={12} md={6} >
                    <div>
                        <Image src={image} style={{width:"90%", height:"500px"}}/>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div style={{marginTop:"50px"}} className="mx-auto">
                        <h2 className="pb-4">{itemName}</h2>
                        <div className="text-muted mt-4">
                            <h6> Category: {categories}</h6>
                            <h6> Gender: {gender}</h6>
                            <h6> Dial Color: {dialColor}</h6>
                        </div>
                        <h2 className="text-danger mt-5">{price}TK</h2>

                        <Button variant="primary" onClick={handleOrderOpen}>Buy Now</Button>

                        <div className="text-muted mt-5">
                            <h6> Movement: {movement}</h6>
                            <h6> Diameter: {diameter}</h6>
                            <h6> Strap: {strap}</h6>
                            <h6> Water Resistance: {waterResistance}</h6>
                        </div>
                    </div>
                </Col>
            </Row>
            
            <div className="mt-5 px-4">
                <h3 className="text-center mb-4 text-decoration-underline fw-bold fs-2">About Watch</h3>
                <p>{description}</p>
            </div>
        </Container>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        />
        <FeatureModal
        key ={featureDetails._id}
        handleOrderClose = {handleOrderClose}
        openOrder = {openOrder}
        featureDetails={featureDetails}
        notify={notify}
        >
        </FeatureModal>
        <Footer />
    </>
        
    );
};

export default FeatureDetails;