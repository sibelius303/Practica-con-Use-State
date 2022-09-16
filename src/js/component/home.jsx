import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [texto, setTexto] = useState('Hello World');
	const textoPantalla = ['Soy un texto', 'Practica y seras el mejor', 'Vas a conseguir trabajo rapido'];

	const cambiarTexto  = ()=>{
		if (texto === 'Hello World') {
			setTexto ('Soy un texto');
		} else if (texto === 'Soy un texto') {
			setTexto ('Practica y seras el mejor');
		} else if (texto === 'Practica y seras el mejor') {
			setTexto ('Vas a conseguir trabajo rapido');

		} else {
			setTexto ('Hello World')
		}
	};

	return (

		<div className="container">
			<div className="pantalla">{texto}</div>
			<button onClick={()=>cambiarTexto()} className="button">Click para cambiar Texto</button>
		</div>
	);
};

export default Home;
