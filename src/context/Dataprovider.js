import React, { createContext, useState, useEffect } from "react";
import Data from "../data/cursos.json";

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [cursos, setCursos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCarrito] =useState([])
	const [total, setTotal] = useState(0)

  useEffect(() => {
		const cursos = Data.items 
		if(cursos){
			setCursos(cursos)
		}else{
			setCursos([])
		}
	}, []);

	const addCarrito = (id) =>{
		const check = carrito.every(item =>{
			return item.id !== id
			
		})
		if(check){
			const data = cursos.filter(cursos =>{
				return cursos.id === id
			})
			setCarrito([...carrito, ...data])
		}else{
			alert("El curso se ha añadido al carrito")
		}
	}
	useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

	useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.price * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])
	
	const value = {
		cursos : [cursos],
		menu: [menu, setMenu],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		total: [total, setTotal]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};
