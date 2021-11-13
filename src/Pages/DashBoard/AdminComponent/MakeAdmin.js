import React, { useState } from 'react';
import { Col, Form, Button, Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MakeAdmin = () => {

    const [email, setEmail ] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email}
        fetch('https://hidden-taiga-98154.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                toast.success('Admin Added Successfully', {
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
        <Container className="bg-dark py-5 mb-4 rounded">
            <Form className="mb-3 mx-5" onSubmit={handleAdminSubmit}>
                    <Form.Group as={Col} className="mb-3" >
                        <Form.Control type="email" name="userName" onBlur={handleOnBlur} placeholder="Enter Email Address" required />
                    </Form.Group>

                <div className="text-center mt-4">
                    <Button variant="danger" type="submit" className="w-50">
                        Make Admin
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
        </Container>
    );
};

export default MakeAdmin;