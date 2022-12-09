import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import libro1 from './assets/images/yr.jpg';
import libro2 from './assets/images/emmdld.jpg';
import libro3 from './assets/images/lldc.jpeg';
import libro4 from './assets/images/gits.jpg';
import libro5 from './assets/images/lhdli.jpg';
import libro6 from './assets/images/deumde.jpg';
import libro7 from './assets/images/af.jpg';
import libro8 from './assets/images/po.jpg';
import libro9 from './assets/images/ldlji.jpg';
import libro10 from './assets/images/f451.jpg';
import libro11 from './assets/images/neuromante.jpg';
import libro12 from './assets/images/edld.jpg';

class Productos{
  constructor(imagen, descripcion, precio, titulo, autor, editorial, edicion, medidas, paginas, genero, tags){
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.precio = precio;
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.edicion = edicion;
    this.medidas = medidas;
    this.paginas = paginas;
    this.genero = genero;
    this.tags = [titulo.toLowerCase(), autor.toLowerCase(), editorial.toLowerCase(), genero.toLowerCase(), ...tags]
  }
}

const $productos = [

  [libro1, '', 5000, 'Yo robot', 'Isaac Asimov', 'Edhasa', 2019, [210, 130], 352, 'Ciencia ficción', ['i robot', 'tres leyes', 'robots']],
  [libro2, '', 2090, 'El mágico mundo de los dragones', 'Morales Máximo', 'Continente', 2015, [200, 280], 65, 'Fantasía', ['medieval', 'magia', 'caballeros', 'dragón']],
  [libro3, '', 2050, 'La llamada de Cthulhu', 'H.P. Lovecraft', 'Aguilar', 2018, [160, 220], 100, 'Terror', ['lovecraftianos', 'suspenso', 'the call of cthulhu']],
  [libro4, '', 3800, 'The ghost in the shell', 'Masamune Shirow', 'Ovni Press', 2017, [150, 210], 352, 'Manga', ['cyborgs', 'alma en la maquina', 'motoko kusanagi', 'cyberpunk', 'gits']],
  [libro5, '', 635, 'La historia de los inventos', 'Anna Claybourne, Adam Larkum', 'Usborne', 2008, [170, 230], 96, 'Enciclopedia', ['ciencias', 'tecnologías', 'herramientas', 'mecánicas']],
  [libro6, '', 4690, 'Dormir en un mar de estrellas', 'Christopher Paolini', 'Umbriel', 2020, [150, 240], 888, 'Ciencia ficción', ['astronomía', 'físicas', 'espacio', 'cosmos', 'astronautas', 'científicos']],
  [libro7, '', 650, 'Animales fantásticos y donde encontrarlos', 'J.K. Rowling', 'Salamandra', 2001, [110, 190], 60, 'Cuento', ['magia', 'harry potter', 'newt scamander', 'hechicería', 'hogwarts']],
  [libro8, '', 1900, 'El planeta olvidado', 'Doug Wilhelm', 'Atlantida', 1994, [160, 230], 113, 'Ciencia ficción', ['astronomía', 'futurismo', 'futuro', 'elige tu propia aventura', 'espacio', 'internet']],
  [libro9, '', 3450, 'La liga de la Justicia Infinita', 'DeMatteis, Tucker, Beavers, Filardi', 'Ovni Press', 2022, [170, 240], 160, 'Cómic', ['dc', 'the justice league infinity', 'batman', 'superman', 'green lantern', 'wonder woman', 'flash', 'hawkgirl', 'the martian', 'super heroes']],
  [libro10, '', 3800, 'Fahrenheit 451', 'Ray Bradbury', 'Minotauro', 2020, [150, 230], 264, 'Cuento', ['distópico distopía', 'fuego', 'futuro futurismo']],
  [libro11, '', 2970, 'Neuromante', 'William Gibson', 'Minotauro', 2022, [150, 230], 304, 'Ciencia ficción', ['cyberpunk', 'distópico distopía', 'futuro futurismo', 'cyborgs', 'acción', 'tiros disparos armas', 'robots', 'el alma en la maquina']],
  [libro12, '', 2970, 'Enciclopedia de los Dinosaurios', 'Michael J. Benton', 'Ediciones SM', 2022, [220, 280], 100, 'Enciclopedia', ['paleontología paleontologia', 'fósiles fosiles', 'arqueología arqueologia', 'prehistoria', 'triásico triasico', 'jurásico jurasico', 'cretácico cretacico', 'ciencia', 'museos']]

]

const productos = [];

for(let i = 0; i < $productos.length; i++){
  productos[i] = new Productos($productos[i][0], $productos[i][1], $productos[i][2], $productos[i][3], $productos[i][4], $productos[i][5], $productos[i][6], $productos[i][7], $productos[i][8], $productos[i][9], $productos[i][10])
}

const generos = [...new Set(productos.map(producto => producto.genero))];

function App() {

  const [genero, setGenero] = useState(generos);
  const [producto, setProducto] = useState(productos);

  const mostrarContenido = e =>{
    if(e.target.classList.contains("dropdown-item")){
      if(e.target.innerHTML === 'Todos'){
        setProducto(productos);
        return
      }
      const productosFiltrados = productos.filter(producto => producto.genero === e.target.innerHTML);
      setProducto(productosFiltrados);
    }
    else if(e.target.classList.contains("btn-outline-success")){
      const busqueda = document.querySelector(".form-control").value.toLowerCase();
      if(busqueda === ''){
        return
      }
      const productosFiltrados = [];

      productos.forEach(producto=>{
        for(let i = 0; i < producto.tags.length; i++){
          if(producto.tags[i].includes(busqueda)){
            productosFiltrados.push(producto);
            break
          }
        }
      })
      if(productosFiltrados.length < 1){
        return
      }
      setProducto(productosFiltrados);
    }
    return animacion();
  }

  function animacion(){
    const animacion = document.querySelector(".card").parentNode.parentNode.animate([
      {opacity: "0"},
      {opacity: "0"},
      {opacity: "1"},
      {opacity: "1"},
      {opacity: "1"}
      ],{
      easing: "ease-out",
      iterations: 1,
      duration: 1000
      }
    );
    return animacion.finished;
  }

  return (
    <div className="App">
      <Header generos={genero} mostrarContenido={mostrarContenido}/>
      <Main productos={producto}/>
      <Footer />
    </div>
  );
}

export default App;
