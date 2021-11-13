import React, { useState } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {

    const [addReview, setAddReview ] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...addReview};
        console.log(newReview);
        newReview[field] = value;
        setAddReview(newReview);
    }

    const handleReviewSubmit = e => {
        const reviewAdd = {
            ...addReview
        }
        fetch('https://hidden-taiga-98154.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewAdd)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        e.target.reset();
        e.preventDefault();
    };
    
    const addedSuccessFully= () => {
        toast.success('Review Added Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
    }


    return (
        <Container className="bg-dark py-5 mb-4 rounded">
            <Row>
                <Col xs={12} md={5}>
                    <Form className="mb-3 mx-5" onSubmit={handleReviewSubmit}>
                            <Form.Group as={Col} className="mb-3" >
                                <Form.Control type="text" name="userName" onBlur={handleOnBlur} placeholder="Full Name" required />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <Form.Control placeholder="Review Title" name="reviewTitle" onBlur={handleOnBlur} />
                            </Form.Group>

                            <Form.Select aria-label="Default select example" name="ratting" onBlur={handleOnBlur} className="mb-3">
                                <option>Please Rating Us</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                            </Form.Select>

                        <Form.Group as={Col}>
                            <textarea className="form-control" name="description" onBlur={handleOnBlur} rows="3" placeholder="Item Description"></textarea>
                        </Form.Group>
                        

                        <div className="text-center mt-4">
                            <Button variant="danger" type="submit" className="w-50" onClick={addedSuccessFully}>
                                Submit
                            </Button>
                        </div>

                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable={false}
                            pauseOnHover
                        />
                </Form>
            </Col>
            <Col xs={12} md={7}>
            </Col>
        </Row>
        </Container>
    );
};

export default Review;