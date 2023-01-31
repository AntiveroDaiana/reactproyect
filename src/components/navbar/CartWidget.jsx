import React, {useContext} from 'react'
import './stylecart.css';
import { DataContext } from '../../context/Dataprovider.js';


export const Carrito = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;
  
    const tooglefalse = () => {
      setMenu(false);
      };
      
  
      const removeCurso = id =>{
          if(window.confirm("¿Quieres suspender el producto?")){
              carrito.forEach((item, index)=>{
                  if(item.id === id){
                      item.cantidad = 1;
                      carrito.splice(index, 1)
                  }
              })
              setCarrito([...carrito])
          }
      }
  
    const show1 = menu ? "carritos show" : "carrito";
      const show2 = menu ? "carrito show" : "carrito";
      
  
  
    return (
      <div className={show1}>
        <div className={show2}>
          <div onClick={tooglefalse} className="carrito__close">
            <box-icon name="x"></box-icon>
          </div>
          <h2>Su Carrito</h2>
          <div className="carrito__center">
                      {
                      
                      
                      carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :<>
                      {
                      carrito.map((curso) => (
              <div className="carrito__item" key={curso.id}>
                <img src={curso.image} alt={curso.title} />
                <div>
                  <h3> {curso.title} </h3>
                  <p className="price">${curso.price}</p>
                </div>
                <div>
                                  <box-icon name="up-arrow" 
                                      type="solid"
                                      />
                  <p className="cantidad">{curso.cantidad}</p>
                                  <box-icon name="down-arrow" 
                                      type="solid" 
                                      />
                </div>
                              <div 
                              onClick={() => removeCurso(curso.id)} 
                              className="remove__item"
                              >
                  <box-icon name="trash" />
                </div>
              </div>
                      ))
                  };
                      
                      </>
                      }
          </div>
  
          <div className="carrito__footer">
            <h3>Total: ${total}</h3>
            <button className="btn">Finalizar compra</button>
          </div>
        </div>
      </div>
    );
  };