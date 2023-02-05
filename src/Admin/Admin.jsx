import { useContext, useState } from "react"
import { cartContext } from "../context/cartcontext"
import { getFirestore,addDoc, collection } from "firebase/firestore"
import swal from "sweetalert";

export const Admin = () => {

    const{cart}=useContext(cartContext)
    const [newProduct,setNewProduct]= useState(
      {name: '',
      price: '',
      category:'',
      stock:'',
      img: ''});
    

    const db =getFirestore()
        
    const formulario =(x)=>{
    setNewProduct({
        ...newProduct,
        [x.target.name]:x.target.value
      })
    }


    const createProduct = () => {

      const querySnapshot = collection(db, "item")
      
      addDoc(querySnapshot, newProduct).then(
          (response) => {
                  swal({
                      title: "Creaste un nuevo producto",
                      text: `felicidades`,
                      icon: "success",
                      button: "Aceptar",
                  });}
             ).catch((e) => console.log(e))
  };


  return (

    <div>
      <form >
          nombre:
          <input type="text" name="name" placeholder="nombre" value={newProduct.name}  onChange ={(e)=>{formulario(e)}}/>
          stock:
          <input type="text" name="stock" placeholder="stock" value={newProduct.stock} onChange ={(e)=>{formulario(e)}}/>
          price:
          <input type="text" name="price" placeholder="price" value={newProduct.price} onChange ={(e)=>{formulario(e)}}/>
          category
          <input type="text" name="category" placeholder="category" value={newProduct.category} onChange ={(e)=>{formulario(e)}}/>
          img:
          <input type="text" name="img" placeholder="img" value={newProduct.img} onChange ={(e)=>{formulario(e)}}/>
      </form>
      <button onClick={()=>{console.log (newProduct)}}>enviar producto</button>
    </div>


  )};

  export default Admin;