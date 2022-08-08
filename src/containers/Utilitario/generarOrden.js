const ordenGenerada = (nombre, direccion, cart, totalShopping) => {
    return {
        buyer: {
            nombre: nombre,
            direccion: direccion
        },
        items: cart,
        totalShopping: totalShopping,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;