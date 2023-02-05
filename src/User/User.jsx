import { UNSAFE_getPathContributingMatches } from "@remix-run/router"
import userEvent from "@testing-library/user-event"
import { useEffect } from "react"
import { useState } from "react"


const User = () => {
    const[user,setUser]=useState({name:""});

    
  return (
    <div>
        <h2>Bienvenido</h2>
        <h4>Por favor registrate</h4>
         <form onSubmit={e=>e.preventDefault()}>
            nombre:
            <input type="text"  value ={user.names} onChange={v=>{setUser(v.target.value)}}></input>
            {/* apellido:
            <input type="text"  value ={user.lastName} onChange={v=>{setUser(v.target.value)}}></input>
            mail
            <input type="mail"  value ={user.mail} onChange={v=>{setUser(v.target.value)}}></input>
            password:
            <input type="password"  value ={user.password} onChange={v=>{setUser(v.target.value)}}></input> */}
         </form>
         <button onClick={()=>test()}>enviar</button>
        
    </div>
  )
}

export default User