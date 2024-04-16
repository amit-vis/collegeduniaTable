import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useTable } from '../context/TableContext';

export const NavbarSection =()=> {
    const {searQuery, setSearchQuery} = useTable()
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
        <Container>
      <h3 className='text-danger'>CollegeList</h3>
      <Form inline>
        <Row>
          <Col xl="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={searQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
            />
          </Col>
          <Col xl="auto">
            <Button>Submit</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
  );
}
