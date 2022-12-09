import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

window.addEventListener("resize", ()=>{
	if(window.innerWidth >= 1000){
		cambiarDireccionNavBar("end", "start");
	}
	else{
		cambiarDireccionNavBar("start", "end")
	}
});

document.body.onload = function() {
	if(window.innerWidth >= 1000){
		cambiarDireccionNavBar("end", "start");
	}
}

function cambiarDireccionNavBar(antes, despues){

	const cambiarCategorias = document.querySelector(".navbar-nav");
	cambiarCategorias.classList.replace(`justify-content-${antes}`, `justify-content-${despues}`)
	
}

function Header(props) {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 position-fixed shadow-lg" id="header">
          <Container fluid>
            <Navbar.Brand href="#">Mercado saladita</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Mercado saladita
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" onClick={props.mostrarContenido}>Search</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown title="Categorías" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <div onClick={props.mostrarContenido}>
                      <NavDropdown.Item>
                        Todos
                      </NavDropdown.Item>
                    </div>
                    <NavDropdown.Divider />
                    {
                      props.generos.map((genero, indice)=>{
                        return(

                          <div key={indice} onClick={props.mostrarContenido}>
                            <NavDropdown.Item>
                              {genero}
                            </NavDropdown.Item>
                          </div>

                        )
                      })
                    }
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;

/*
const Header = ()=>{
	return(

		<nav className="navbar navbar-light bg-light position-fixed w-100 shadow-sm" id="header">
		  <div className="container-fluid">
		    <a className="navbar-brand">LogoTipo</a>
		    <div className="d-flex">
		      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
		      <button className="btn btn-outline-success">Search</button>
		    </div>
		  </div>
		</nav>

	)
}

export default Header;
*/