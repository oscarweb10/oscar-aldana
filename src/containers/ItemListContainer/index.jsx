
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';


const ItemListContainer = ({ greeting }) => {

  
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  


  const params = useParams()
  console.log(params)

  useEffect(() => {

    const getProductos = async () => {
      try {

        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = [];

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
         
          productos.push({id: doc.id, ...doc.data()})
          
        });

        console.log(productos)

        // const response = await fetch('https://fakestoreapi.com/products');
        // const data = await response.json();
        setProductos(productos);
        setProductosFiltrados(productos)
      }catch (error){
        console.log('Hubo u error')
        console.log(error)
      }
    }
    getProductos();
  }, [])

  useEffect(() => {
    if(params?.categoryid){
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryid)
    setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])

  console.log(productos)
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





























/*import ItemCounter from '../../components/ItemCounter/ItemCounter'
import React, {useEffect, useState} from 'react'
import ItemList from '../../components/ItemList'
import './styles.css'



const ItemListContainer = ({greeting}) => {
 
































const [data, setData] = useState ([])
  const productos =[
    {id : 1, nombre: 'Espiral Negro', precio : '60', imagen :'/assets/espiralnegro.jpg' },
    {id : 2, nombre: 'Breaker', precio : '35', imagen :'/assets/image-breaker2.jpg' },
    {id : 3, nombre: 'Espiral Negro', precio : '10', imagen :'/assets/espiralnegro.jpg' },
    ]
  
  const promesa = new Promise((resp, rej) => {
    setTimeout(()=>{
      resp(productos)
    },2000)
  }
  )
  useEffect(() => {
    promesa
    .then(res=>setData(res))
    .catch(error=> console.log(error))
  },[])
  return(
    <div className='data'>
      <ItemList info ={data}/>
    </div>
  )

  /*const onAdd = (count)=>{
    alert( 'Agrego al Carrito: ' +count )
}

  return (
    <div className='offers'>
        <p>{greeting}</p>
        <div className='products'>
            <img src="/assets/espiralnegro.jpg" alt="breaker" className='img'/>
            <img src="/assets/breaker403p.jpg" alt="breaker" className='img'/>
            <img src="/assets/tester.png" alt="breaker" className='img'/>
        
            <ItemCounter initial = {1} stock = {8} onAdd = {onAdd}/>
        </div>
    </div>*/
  

