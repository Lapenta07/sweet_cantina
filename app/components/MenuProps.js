import { useEffect, useState } from "react";
import './menuProps.css'
import Carrito from "./icons/Carrito";
import data from '../components/recetas_españa.json';

export default function MenuProps({ agregarCarrito }) {
  const [post, setPost] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    setPost(data);
  }, []);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert('Cantidad no válida');
      return;
    }

    const platoSeleccionado = post.find(item => item.id === id);

    if (platoSeleccionado) {
      const itemCarrito = {
        id: platoSeleccionado.id,
        imagen: platoSeleccionado.imagen,
        Nombre: platoSeleccionado.nombre,
        Precio: platoSeleccionado.valor,
        cantidad: cantidad,
      };

      agregarCarrito(itemCarrito);
      alert('Plato agregado al carrito');
    } else {
      alert('Plato no encontrado');
    }
  };

  return (
    <div className="main">
      {post.map(({ id, imagen, nombre, descripcion, pais, valor }) => (
        <article key={id} className="card">
          <div className="imgBx">
            <img src={imagen} alt={nombre} />
          </div>
          <div className="titulo">
            <h3>{nombre}</h3>
          </div>

          <div className="contenido">
            <div className="descripcion">
              <p>{descripcion}</p>
            </div>
            <div className="atributos">
              <p>{pais}</p>
            </div>
            <div className="precio">
              <p>${valor}</p>
              <form className="form" onSubmit={(e) => handleSubmit(e, id)}>
                <label className="cantidad">Cantidad:</label>
                <select
                  className="seleccion"
                  value={cantidad}
                  onChange={(e) => setCantidad(parseInt(e.target.value))}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button className="boton" type="submit">
                  <Carrito fill="#ff5c5c" />
                </button>
              </form>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
