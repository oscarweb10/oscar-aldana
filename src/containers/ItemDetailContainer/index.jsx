import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../containers/ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});

    const params = useParams()
    console.log(params)



    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.productid}`);
                const data = await response.json()
                setProductDetail(data)
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