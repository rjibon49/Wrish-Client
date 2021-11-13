import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFeatureItem from '../../../Hooks/userFeatureItem';
import EditProduct from '../AdminComponent/EditProduct/EditProduct';

const ManageProducts = () => {

    const [dataDelete, setDataDelete] = useState([]);
    const {editdatainfo} = useFeatureItem();
    console.log(editdatainfo);

    const [openOrder, setOpenOrder] = useState(false);
    const handleOrderOpen = () => setOpenOrder(true);
    const handleOrderClose = () => setOpenOrder(false);

    useEffect(() => {
      fetch('http://localhost:5000/products')
      .then ( res => res.json())
      .then ( data => setDataDelete(data));
  },[])

    const handleDelete = id => {
      const url = `http://localhost:5000/products/${id}`;
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
              const remaining = dataDelete.filter(pl => pl._id !==id)
              setDataDelete(remaining);
          }
      })
  }

    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="text-center">
              <th scope="col">itemName</th>
              <th scope="col">price</th>
              <th scope="col">categories</th>
              <th scope="col">movement</th>
              <th scope="col">diameter</th>
              <th scope="col">waterResistance</th>
              <th scope="col">gender</th>
              <th scope="col">strap</th>
              <th scope="col">dialColor</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
            {
              dataDelete.map(pl => 
                
                <tbody key ={pl._id}>
                <tr>
                    <td>{pl.itemName}</td>
                    <td>{pl.price}</td>
                    <td>{pl.categories}</td>
                    <td>{pl.movement}</td>
                    <td>{pl.diameter}</td>
                    <td>{pl.waterResistance}</td>
                    <td>{pl.gender}</td>
                    <td>{pl.strap}</td>
                    <td>{pl.dialColor}</td>
                    <td className="text-center">
                    <button className="btn btn-danger p-1 m-1" onClick={ () => handleDelete(pl._id)}><DeleteIcon className="m-1"/></button>
                    <button className="btn btn-danger p-1 m-1" onClick={handleOrderOpen}><BorderColorIcon className="m-1"/></button>
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
        <EditProduct
          key ={dataDelete._id}
          handleOrderClose = {handleOrderClose}
          openOrder = {openOrder}
          dataDelete={dataDelete}
        ></EditProduct>
      </>
    );
};

export default ManageProducts;