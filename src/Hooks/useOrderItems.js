import { useEffect, useState } from "react";

const useOrderItems = () => {
    const [featureItem, setfeatureItem] = useState([]);
    useEffect(() => {
        fetch('https://hidden-taiga-98154.herokuapp.com/order')
        .then ( res => res.json())
        .then ( data => setfeatureItem(data));
    },[])
    
    return [featureItem];
}

export default useOrderItems;