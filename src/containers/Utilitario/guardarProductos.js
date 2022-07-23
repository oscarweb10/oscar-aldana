/*import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase/config';


const algoritmoGuardadoAutomatico = async () => {
    console.log('Entra de una vez');
    const response = await fetch('/data.json');
    const productosAGuardar = await response.json();

    productosAGuardar.forEach(async (producto) => {
        const docRef = await addDoc(collection(db, 'products'), {
            title: producto.title,
            price: producto.price,
            description: producto.description,
            category: producto.category,
            stock: producto.stock

        })
    });
}

export default algoritmoGuardadoAutomatico;*/