import React from 'react'
/*import {Card, Button} from 'react-bootstrap'*/
import { useNavigate } from 'react-router-dom'
import './Item1.css'



const Item = ({prod}) => {

const navigation = useNavigate()
const handleDetail = ()=> {
  console.log('hacia detail')
  navigation(`/detail/${prod.id}`)
}

   

    return(
     
      <div className='nombre' onClick = {handleDetail}>
      
      

      <p>{prod.title}</p>
      <img src={prod.image} alt='' />
      <p>Price:{' '+prod.price+'$'}</p>
     
      </div>
    )
  }

export default Item