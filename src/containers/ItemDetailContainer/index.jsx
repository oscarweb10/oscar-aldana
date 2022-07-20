import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../containers/ItemDetail'
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});

    const params = useParams()
    console.log(params)



    useEffect(() => {
        const getProduct = async () => {
            try {
                const docRef = doc(db, "products",params.productid);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                  console.log("Document data:", docSnap.data());
                  console.log(docSnap.id);
                  const productDetail = {id: docSnap.id, ...docSnap.data()}
                  setProductDetail(productDetail);
                  console.log(productDetail);
                } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
                }





               //const response = await fetch(`https://fakestoreapi.com/products/${params.productid}`);
               // const data = await response.json()
               // setProductDetail(data)
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