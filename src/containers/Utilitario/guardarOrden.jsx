import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import swal from 'sweetalert';
import { db } from "../../firebase/config";

const guardarOrden = (cart, orden) => {
    const batch = writeBatch(db)
    const outOfStock = []
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, 'products', productoEnCart.id))
            .then(async (documentSnapshot) => {
                const producto = { ...documentSnapshot.data(), id: documentSnapshot.id };
                if (producto.stock >= productoEnCart.quantity) {
                    batch.update(doc(db, 'products', producto.id), {
                        stock: producto.stock - productoEnCart.quantity
                    })
                } else {
                    outOfStock.push(producto)
                }
                console.log("Productos fuera de stock:");
                console.log(outOfStock);
                if (outOfStock.length === 0) {
                    addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                        batch.commit().then(() => {
                            swal({
                                title: "Se genero la orden de compra id:",
                                text: id,
                                icon: "success",
                                button: "Aceptar"
                            });
                        })
                    }).catch((err) => {
                        console.log(`Error: ${err.message}`);
                    })
                } else {
                    let mensaje = ''
                    for (const producto of outOfStock) {
                        mensaje += `${producto.title}`
                    }
                    alert(`Productos fuera de stock: ${mensaje}`)
                    swal({
                        title: "Productos fuera de stock",
                        text: "Puede selecionar otros productos",
                        button: "Aceptar"
                    });
                }
            })
    })
}

export default guardarOrden;