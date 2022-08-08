import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../containers/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const params = useParams()
    useEffect(() => {
        const getProduct = async () => {
            try {
                const docRef = doc(db, "products", params.productid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    console.log(docSnap.id);
                    const productDetail = { id: docSnap.id, ...docSnap.data() }
                    setProductDetail(productDetail);
                    console.log(productDetail);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [params])
    return (
        <div>
            <ItemDetail product={productDetail} />
        </div>
    )
}

export default ItemDetailContainer