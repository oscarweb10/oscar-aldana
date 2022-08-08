import useModal from '../../components/hook/useModal';
import Modal from '../Utilitario/Modal';
import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import './ModalCart.css'

const ModalCart = () => {
  const { cart, cartLenght, totalShopping } = useContext(Shop)
  const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
  return (
    <div>
      <p className='pfo'>Casi terminás tu compra!!</p>
      <div className='registro'>
        <button type="button" className="btn btn-primary" onClick={openChatModal}>
          Finalizar Compra
        </button>
      </div>
      <div className='ima'>
        <img className='imagen' src='/assets/tienda.jpg' alt='artic' />
      </div>
      <p>Todos los productos que necesites podrás encontrarlos en tu nuevo E-commerce de confianza. ¡AQUÍ!</p>
      <p>Dentro de nuestras secciones podrás dividir tu búsqueda en productos específicos y elegir el que mejor se adapte a tus necesidades.</p>
      <Modal
        isOpen={isOpenChatModal}
        closeModal={closeChatModal}
        title="Tú Compra"
      >
        <>
          <div>
            {cartLenght() > 0 ?
              <div>
                {cart.map(producto => {
                  return (
                    <div className='cart' key={producto.id}>
                      <table class="table table-striped">
                        <tbody>
                          <tr>
                            <th scope="row"></th>
                            <td>{producto.title}</td>
                            <td>Cant: {producto.quantity}</td>
                            <td> {producto.price} $</td>

                            <td>Total: {producto.quantity * producto.price} $</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>)
                })}
                <p className='totalArticulos'>Total Productos: {cartLenght()}</p>
                {cartLenght() !== 0 && <h6 className='totalShopping' onClick={() => { totalShopping() }}>Total Compra: {totalShopping()} $</h6>}
              </div>
              :
              <div className='carritoVacio'>
              </div>
            }
          </div>
        </>
      </Modal>
    </div>











  )
}

export default ModalCart
