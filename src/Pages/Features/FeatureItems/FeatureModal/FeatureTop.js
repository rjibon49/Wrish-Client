import React, { useState } from 'react';
import useAuth from "../../../../Hooks/useAuth";
import {Button, Form, Row, Col } from "react-bootstrap";
import { Modal } from 'bootstrap';



const FeatureTop = (modalShow, setModalShow, featureDetails, notify) => {
    const { name, price, categories } = featureDetails;
    console.log(featureDetails);
    const { user } = useAuth();
    
    const initialInfo = {
        orderItem: name,
        email: user.email,
        customerName: user.displayName,
        address: "",
        phone: "",
        city: "",
        itemPrice: price,
        itemCategory: categories,
      };

      const [itemOrder, setItemOrder] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrder = { ...itemOrder };
    newOrder[field] = value;
    console.log(newOrder);
    setItemOrder(newOrder);
  };

  const handleOrderSubmit = e => {

    setModalShow(false);
    e.preventDefault();
};

function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header
              closeButton
              style={{ backgroundColor: "#413e46a8" }}
            ></Modal.Header>
            <Modal.Body style={{ backgroundColor: "#413e46a8" }}>
              <Form onSubmit={handleOrderSubmit} className="mb-3">
                <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                  <Form.Control  type="text"  name="orderItem" placeholder="Item Name"  defaultValue={name} disabled />
                </Form.Group>
                <Form.Group className="mb-3" as={Col}>
                  <Form.Control type="email" name="email" onBlur={handleOnBlur}  placeholder="Email" defaultValue={user.email} />
                </Form.Group>
                <Form.Group className="mb-3" as={Col}>
                  <Form.Control type="text" name="customerName" onBlur={handleOnBlur} placeholder="Full Name" defaultValue={user.displayName} />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Address" type="text" name="address" onBlur={handleOnBlur} defaultValue=""/>
                </Form.Group>
    
                {/* <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Control placeholder="Phone Number" />
                    </Form.Group> */}
    
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control placeholder="Phone" type="number" name="phone" onBlur={handleOnBlur} defaultValue="Phone" />
                  </Form.Group>
    
                  <Form.Group as={Col}>
                    <Form.Control placeholder="City" type="text" name="city" onBlur={handleOnBlur}defaultValue="City" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control placeholder="Price" name="price" disabled defaultValue={price} />
                  </Form.Group>
    
                  <Form.Group as={Col}>
                    <Form.Control placeholder="categories" name="itemCategory" disableddefaultValue={categories} />
                  </Form.Group>
                </Row>
    
                <div className="text-center">
                  <Button variant="danger"  type="submit" className="w-50" onClick={notify} >
                    Submit
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        );
      }
    
      return (
        <>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      );
};

export default FeatureTop;