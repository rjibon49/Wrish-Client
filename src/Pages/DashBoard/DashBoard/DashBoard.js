import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Table } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';


function DashBoard() {
  const { user, logout } = useAuth();


  const [itemOrder, setOrderItem] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/order?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderItem(data));
  }, []);

  const handleDelete = email => {
    const url = `http://localhost:5000/order?email=${email}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then( res => res.json())
    .then( data => {
        console.log(data);
        if(data.deletedCount) {
          toast.success('Data Delete Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
            const remaining = itemOrder.filter(pl => pl._id !==email)
            setOrderItem(remaining);
        }
    })
}


  return ( 
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {
              itemOrder.map(pl => 
                
                <tbody key ={pl._id}>
                <tr>
                    <td>{pl.customerName}</td>
                    <td>{pl.email}</td>
                    <td>{pl.address}</td>
                    <td>{pl.orderItem}</td>
                    <td>{pl.itemCategory}</td>
                    <td>Pending</td>
                    <td className="text-center">
                        < BorderColorIcon  className="m-2"/> 
                        <button className="btn btn-danger" onClick={ () => handleDelete(pl._id)}><DeleteIcon className="m-2"/></button>
                    </td>
                </tr>
            </tbody>
              )
            }
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
        </Table>
  );
}


export default DashBoard;
