import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import useAuth from "../../../../Hooks/useAuth";
import { Button, Form, Row, Col } from "react-bootstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FeatureModal = ({
  openOrder,
  handleOrderClose,
  featureDetails,
  notify,
}) => {
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
    setItemOrder(newOrder);
  };

  const handleOrderSubmit = e => {

    //Collect Data
    const orderItem = {
      ...itemOrder,
      email: user.email,
      customerName: user.displayName
    }
    //Send Data to Server
    fetch('https://hidden-taiga-98154.herokuapp.com/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orderItem)
    })
    .then(res =>res.json())
    .then(data => {
      console.log(data);
    })

    handleOrderClose();
    e.preventDefault();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openOrder}
      onClose={handleOrderClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openOrder}>
        <Box sx={style}>
          <Form onSubmit={handleOrderSubmit} className="mb-3">
            <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
              <Form.Control
                type="text"
                name="orderItem"
                placeholder="Item Name"
                defaultValue={name}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" as={Col}>
              <Form.Control
                type="email"
                name="email"
                onBlur={handleOnBlur}
                placeholder="Email"
                required
                defaultValue={user.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" as={Col}>
              <Form.Control
                type="text"
                name="customerName"
                onBlur={handleOnBlur}
                placeholder="Full Name"
                defaultValue={user.displayName}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Address"
                type="text"
                name="address"
                onBlur={handleOnBlur}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Control placeholder="Phone Number" />
                    </Form.Group> */}

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Phone"
                  type="text"
                  name="phone"
                  onBlur={handleOnBlur}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  placeholder="City"
                  type="text"
                  name="city"
                  onBlur={handleOnBlur}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Price"
                  name="price"
                  disabled
                  defaultValue={price}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  placeholder="categories"
                  name="itemCategory"
                  disabled
                  defaultValue={categories}
                />
              </Form.Group>
            </Row>

            <div className="text-center">
              <Button
                variant="danger"
                type="submit"
                className="w-50"
                onClick={notify}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default FeatureModal;
