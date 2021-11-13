import { useEffect, useState } from "react";

const useFeatureItem = () => {
    const [featureItem, setfeatureItem] = useState([]);
    useEffect(() => {
        fetch('https://hidden-taiga-98154.herokuapp.com/products')
        .then ( res => res.json())
        .then ( data => setfeatureItem(data));
    },[])
    
    return [featureItem];
}

export default useFeatureItem;