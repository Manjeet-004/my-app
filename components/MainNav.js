import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'

function MainNav() {

  // add search function
  function search() {
    // consol

    const { data, error } = useSWR(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
    );

    if (error) {
        return <Error statusCode={404} />;
    }

    if (!data) {
        return null;
    }

    const { primaryImageSmall, title, objectDate, classification, medium } =
        data;

    const imageUrl = primaryImageSmall
        ? primaryImageSmall
        : "https://via.placeholder.com/375x375.png?text=[+Not+Available+]";


  }






  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Manjit Kaur</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            
            <Nav.Link href="/search">Advanced Search</Nav.Link>
           
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" href='/search'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;