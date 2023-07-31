'use client'
import './tienda.css'
import { useCarrito } from '../CarritoContext';
import { useEffect, useState } from 'react';

export default function Tienda() {
const { carrito, agregarCarrito } = useCarrito();
console.log(carrito);

const [total, setTotal] = useState(0)

useEffect(()=>{
    const calculoTotal = carrito.reduce((total, producto)=> total + (producto.cantidad * producto.Precio), 0)

    setTotal(calculoTotal);
}, [carrito])

return (
    <main className="principal">
    <h1 className="heading"></h1>

    <section className="agregados">
        <div className='izquierda'>
        <h2>Platos</h2>
        {carrito.length === 0 ? 'Carrito Vacio' : (
            carrito.map(producto => (
            <div key={producto.id} className='prod1'>
                <div className='prodimg'>
                <img src={producto.imagen}/>
                </div>
                <div className="prodinfo">
                <p>Plato: {producto.Nombre}</p>
                <p>Precio: ${producto.Precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Subtotal: $<span>{producto.Precio * producto.cantidad}</span></p>
                </div>
            </div>
            ))
        )}
        </div>
        <div className='derecha'>
        
        {total > 0 ? (
                    <div className='resumen'>
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    
                    <div className="form2">
                    
                    <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact"></input>
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre" required></input>
                        <input type="text" id="apellido" name="apellido" placeholder="Apellido"></input>
                        <input type="text" id="telefono" name="telefono" placeholder="Telefono" required></input>
                        <input type="text" id="direccion" name="direccion" placeholder="Dirección" required></input>
                        <textarea id="mensaje" name="mensaje" placeholder="Escriba su pedido especial..."></textarea>
                        <div className="boton">
                            <button>REALIZAR PEDIDO</button>
                        </div>
                    </form>
                    </div>
                    </div>
        ) : <p>No hay productos</p>}

        </div>
    </section>
    </main>
)
}
