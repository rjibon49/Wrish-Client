import React from 'react';
import { Link } from 'react-router-dom';
import storeBg from '../../../Images/Items/store-bg.jpeg'

const StoreLocation = () => {
    return (
        <div className="py-5">
            <div style={{backgroundImage:`url(${storeBg})`, width:"100%",height:"500px",backgroundPosition:"center"}}>
                <div style={{width:"100%",height:"500px",backgroundColor:"#00000082"}}>
                    <div className="text-center pt-5 text-white">
                        <h1 style={{fontFamily:"fantasy", fontSize:"4em", letterSpacing:"2px", marginTop:"15px"}}>Experience Watches</h1>
                        <h5 style={{fontFamily:"fantasy", fontSize:"2em", letterSpacing:"2px", marginTop:"15px"}}>Find A Helios Store Near You.</h5>
                        <Link to="/notFound">
                            <button className="btn btn-primary mt-4 px-4 fs-4 fw-bold rounded-pill">Locate Stores</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreLocation;