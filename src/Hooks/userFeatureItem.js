import { useEffect, useState } from "react";

const useFeatureItem = () => {
    const [featureItem, setfeatureItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then ( res => res.json())
        .then ( data => setfeatureItem(data));
    },[])
    
    return [featureItem];
}

export default useFeatureItem;