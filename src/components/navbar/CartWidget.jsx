import { useState } from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartcontext";
import "./style.css"
import "./stylecart.css"

const CartWidget = () => {

  const{cart,quantityProdsCart, plus, rest, getItemTotal, getTotalCart}=useContext(cartContext)
  
  useEffect(()=>{
    const total=quantityProdsCart(cart)
  },[cart, quantityProdsCart])
  
  return (
    <div className="cart">
        {cart.map(item => {
          return(
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "15px", boxShadow: "box-shadow: 4px 7px 20px -7px rgba(0,0,0,0.75)"}}>
            <div style={{display: 'flex', alignItems: "center", marginLeft: "20px"}}>
              <h1>{`${item.name}, ${item.category}`}</h1>
              <img src={item.image} width="50px" height="50px" alt="img" style={{marginLeft: "10px"}}/>
            </div>
            <div style={{display: "flex", height: "100%", alignItems: "center", width: "160px"}}>
              <div style={{height: "40%", marginRight: "30px"}}>
                <button onClick={() => plus(item)} className="item-detail__text-container-back">+</button>
                <p>{item.quantity}</p>
                <button onClick={() => rest(item)} className="item-detail__text-container-back">-</button>
              </div>
              <div style={{display: "flex", flexDirection: 'column', alignItems: "center", marginRight: "20px"}}>
                <h3 style={{margin: "0"}}>Total</h3>
                <h3 style={{margin: "0"}}>{item.name}</h3>
                <h3 style={{margin: "0"}}>{`${getItemTotal(item)}`}</h3>
              </div>
            </div>
          </div> 
          )
        })}
        {cart.length > 0 ?
        <div style={{alignSelf: "center", padding: "20px", border: "1px solid black", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h3 style={{margin: "0"}}>{`El total del carrito es:`}</h3>
          <h3 style={{margin: "0"}}>${getTotalCart()}</h3>
        </div> :
        <div style={{alignSelf: "center"}}>
          <h3>Carrito Vacio</h3>
        </div>
        }
    </div>
    
  );
};

export default CartWidget;




