import useModalCliente from '../../components/hook/useModalCliente';
import ModalRegistro from '../Utilitario/ModalRegistro';
import ModalCart from './ModalCart';
import './ModalCart.css'

const ModalCliente = () => {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModalCliente();

  return (
    <div>
      <p className='pfo'>Casi terminás tu compra!!</p>
      <div className='registro'>
        <button type="button" className="btn btn-primary" onClick={openLoginModal}>
          Registro Cliente
        </button>
      </div>
      <p className='pfo'> Ingrese sus datos por favor</p>
      <div className='ima'>
        <img className='imagen' src='/assets/tienda.jpg' alt='artic' />
      </div>
      <p>Todos los productos que necesites podrás encontrarlos en tu nuevo E-commerce de confianza. ¡AQUÍ!</p>
      <p>Dentro de nuestras secciones podrás dividir tu búsqueda en productos específicos y elegir el que mejor se adapte a tus necesidades.</p>
      <ModalRegistro
        isOpen={isOpenLoginModal}
        closeModal={closeLoginModal}
        title="Registrar Datos"
      >
        <form>
          <div className='dato'>
            <p>Ingrese Nombre</p>
            <input
              type="name"
              placeholder="name"
            />
            <p>Ingrese email</p>
            <input
              type="email"
              placeholder="@"
            />
            <p>Ingrese numero telefonico</p>
            <input
              type="number"
              placeholder="numero"
            />
          </div>
        </form>
      </ModalRegistro>
      <ModalCart />
    </div>
  )
}

export default ModalCliente
