import React from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const DashboardBody = ({pl}) => {
    const { address, customerName, email, orderItem, itemCategory} = pl;

    return (
        <tbody>
            <tr>
                <td>{customerName}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{orderItem}</td>
                <td>{itemCategory}</td>
                <td>Pending</td>
                <td className="text-center">
                    < BorderColorIcon  className="me-2"/> 
                    <DeleteIcon className="ms-2"/>
                </td>
            </tr>
        </tbody>
    );
};

export default DashboardBody;