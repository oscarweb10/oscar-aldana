
import ItemCounter from '../../components/ItemCounter/ItemCounter'
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
  
}

export default ItemListContainer