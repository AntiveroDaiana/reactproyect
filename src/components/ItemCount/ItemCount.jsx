import React , {useEffect,useContext, useState} from "react";
import './ItemCount.css';
import {cartContext} from "../../context/cartcontext";
import swal from 'sweetalert';



const ItemCount = ({stock, id, category, image, itemName, price}) => {
    console.log({itemName})
    // console.log(detalle)
    // const {stock} = detalle
    const [counter,setCounter] =useState(0);
    const [fil,setfil] =useState();

    const{addItem,cart,init}=useContext(cartContext)

    useEffect(()=>{
      const finder= cart.find((x)=>x.id === id)
      setfil(finder)
    },[cart, id, init])


    const reset = ()=>{
      if(fil ){
      if(fil.quantity+counter>stock){
    setCounter(0)
    swal(`No tenemos tantas unidades nos quedan ${stock-fil.quantity}`,"","error")}
    else{
      console.log({test0: {id: id, stock: stock, category, image, name: itemName, price}})
      addItem({id: id, stock: stock, category, image, name: "test", price}, counter)
      setCounter(0)}
    } else
      console.log({test1: {id: id, stock: stock, category, image, name: itemName, price}})
      addItem({id: id, stock: stock, category, image, name: itemName, price}, counter)
      setCounter(0)
    }      
      const suma =()=>{
        if(stock ===counter){
          return;
        }
        setCounter (counter+1);
        
    
        };
      const menos =()=>{
        if (counter<=0){
          return;
        }
        setCounter (counter-1);
      }
      console.log({itemDetailCart: cart})
      return (
        <div className="counter">
          <div className="counter__controllers">
            <button onClick={()=> menos()} className="item-detail__text-container-back">-</button>
            <div>
              <h4>{counter}</h4>
            </div>
            <button onClick={suma} className="item-detail__text-container-back">+</button>
          </div>
          <div>
            <button onClick={()=>reset()} className="item-count__add-to-car"> Agregar Carrito</button>
          </div>
        </div>
        
      );
    };
    
    export default ItemCount;


