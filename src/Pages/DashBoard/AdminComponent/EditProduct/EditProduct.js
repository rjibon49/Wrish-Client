import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const EditProduct = ({openOrder, handleOrderClose, dataDelete}) => {
    const { itemName,image, price, categories, movement, diameter, waterResistance, gender, strap, dialColor,description} = dataDelete;
console.log(dataDelete);
        const initialInfo = {
            itemName: itemName,
            price: price,
            categories: categories,
            movement: movement,
            diameter: diameter,
            waterResistance: waterResistance,
            gender: gender,
            strap: strap,
            dialColor: dialColor,
        };
      
        const [editProduct, seEditProduct] = useState(initialInfo);
    
        const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newProduct = {...editProduct};
            console.log(newProduct);
            newProduct[field] = value;
            seEditProduct(newProduct);
        }
    
        const handleProductSubmit = e => {
            const productAdd = {
                ...editProduct
            }
            fetch('', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productAdd)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    toast.success('Product Update Successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        });
                }
            })
            e.target.reset();
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
            <Form className="mb-3 mx-5" onSubmit={handleProductSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Control type="text" name="itemName" defaultValue={itemName} onBlur={handleOnBlur} placeholder="Item Name" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control type="text" name="image" defaultValue={image} onBlur={handleOnBlur} placeholder="Image" required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Price" defaultValue={price}  name="price" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="categories" defaultValue={categories} name="categories" onBlur={handleOnBlur} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Movement" defaultValue={movement}  name="movement" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="Diameter" defaultValue={diameter} name="diameter" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="Dial Color" defaultValue={dialColor} name="dialColor" onBlur={handleOnBlur} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Water Resistance" defaultValue={waterResistance}  name="waterResistance" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="Gender" defaultValue={gender} name="gender" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="Strap" defaultValue={strap} name="strap" onBlur={handleOnBlur} />
                    </Form.Group>
                </Row>

                <Form.Group as={Col}>
                    <textarea className="form-control" defaultValue={description} name="description" onBlur={handleOnBlur} rows="3" placeholder="Item Description"></textarea>
                </Form.Group>
                

                <div className="text-center mt-5">
                    <Button variant="danger" type="submit" className="w-50" >
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
          </Box>
      </Fade>
    </Modal>
    );
};

export default EditProduct;