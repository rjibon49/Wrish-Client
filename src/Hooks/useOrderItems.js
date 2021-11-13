import { useEffect, useState } from "react";

const useOrderItems = () => {
    const [featureItem, setfeatureItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order')
        .then ( res => res.json())
        .then ( data => setfeatureItem(data));
    },[])
    
    return [featureItem];
}

export default useOrderItems;