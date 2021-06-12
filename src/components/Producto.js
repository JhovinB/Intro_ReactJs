import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {
    const {id,nombre,precio}=producto;

    //Agregar producto al carrito
    const seleccionarProducto=id=>{
        const producto = productos.filter(producto=>
            producto.id===id)[0];
        agregarProducto([
            ...carrito,
            producto]);
    }
    //Agregar producto al carrito
    const eliminarProducto=id=>{
        const productos = carrito.filter(producto=>
            producto.id!==id);
        //Colocar los productos en el state
        agregarProducto(productos);
    }
    return ( 
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{id}</td>
                        <td>{nombre}</td>
                        <td>${precio}</td>
                        </tr>
                    </tbody>
                </table>
                {productos
                ?
                (<button type="button"
                        onClick={()=>seleccionarProducto(id)}
                        >Comprar</button>)
                :
                (<button type="button"
                        onClick={()=>eliminarProducto(id)}
                        >Eliminar</button>)
                }
            </div>
        );
}
 
export default Producto;