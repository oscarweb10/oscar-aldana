import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const params = useParams()
  useEffect(() => {
    const getProductos = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          productos.push({ id: doc.id, ...doc.data() })
        });
        // const response = await fetch('https://fakestoreapi.com/products');
        // const data = await response.json();
        setProductos(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        console.log('Hubo u error')
        console.log(error)
      }
    }
    getProductos();
  }, [])
  useEffect(() => {
    if (params?.categoryid) {
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryid)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])

  return (
    <div>
      {productos.length !== 0 ?
        <ItemList products={productosFiltrados} />
        :
        <p>Loading...</p>
      }
    </div>
  )
}

export default ItemListContainer
