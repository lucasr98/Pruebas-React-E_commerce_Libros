import Products from './Products';
import Carrusel from './Carrusel';

const Main = (props)=>{
	return(

		<main className="principal d-flex flex-column">
			<Carrusel />
			<Products productos={props.productos}/>
		</main>

	)
}

export default Main;