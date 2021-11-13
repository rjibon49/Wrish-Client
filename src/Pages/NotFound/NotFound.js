import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="containe py-5 my-5">
            <div className="text-center">
                <h1 style={{fontFamily:"fantasy", fontSize:"6em", letterSpacing:"2px", marginTop:"15px"}}>4o4</h1>
                <h3 style={{fontFamily:"fantasy", fontSize:"3em", letterSpacing:"2px", marginTop:"15px"}}>Page Not Found</h3>
                <Link to={`/home`}><button className="btn btn-danger w-25 py-3 fs-2 mt-4 fw-bold">GO HOME</button></Link>
            </div>
        </div>
    );
};

export default NotFound;