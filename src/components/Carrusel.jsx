import carrusel1 from '../assets/images/carrusel1.jpg';
import carrusel2 from '../assets/images/carrusel2.jpg';
import carrusel3 from '../assets/images/carrusel3.jpg';

import Carousel from 'react-bootstrap/Carousel';

const Carrusel = ()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrusel1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrusel2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrusel3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;