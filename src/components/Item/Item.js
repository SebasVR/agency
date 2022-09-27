import { Link } from 'react-router-dom'
import './item.css';

const Item = ( {producto} ) => {

    return (
        <div className='card'>
            <div className='content'>
                <img className='imagen' src={producto.img} alt="img"/>
                <h4 className='titulos-card-name'>{producto.nombre}</h4>
                <p className='precio'>Precio: <strong>$ {new Intl.NumberFormat("es-CO").format( Math.round(producto.precio) )}</strong></p>
                <small>Stock disponible: {producto.stock}</small>
                <p>{producto.desc}</p>
                {
                    producto.stock > 0
                    ? <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>
                    : <p className='btn btn-outline-danger'>No hay stock de este producto</p>
                }
            </div>
        </div>
    )
}

export default Item