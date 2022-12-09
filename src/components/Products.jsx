import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Button from 'react-bootstrap/Button';

const Products = (props)=>{
	return(

		<ResponsiveMasonry columnsCountBreakPoints={{280: 1, 320: 2, 700: 3, 1200: 4}}>
            <Masonry gutter={".25rem"}>
            	{
            		props.productos.map((producto, indice)=>{
            			return(

            				<div className="card" key={indice}>
							  <div className="img-container">
							  	<img src={producto.imagen} className="card-img-top" />
								<div className="card__mask">
									<Button variant="outline-info">Ver más</Button>
								</div>
							  </div>
							  <div className="card-body">
							    <h5 className="card-title">{producto.titulo}</h5>
							    <p className="card-text">{producto.descripcion}</p>
							    <span className="product__price">
	        						Precio: <span className="product__price_value">${producto.precio}</span>
	        					</span>
							  </div>
							</div>

        				)
            		})
            	}
            </Masonry>
        </ResponsiveMasonry>

	)
}

export default Products;