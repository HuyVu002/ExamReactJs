import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

function Menu(){

    return (
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Text><i class="bi bi-search"></i></InputGroup.Text>
          <Form.Control placeholder="Search" aria-label="Search"/>
        </InputGroup>

        <p>A list of Books</p>
        <ListGroup className='mb-3'>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <div>
        <Form.Select size="sm" className='mb-3'>
          <option>Author Ascending</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        </div>
        <p>Add a new Book</p>
        
        <Form.Label>Title</Form.Label><Form.Control size="sm" type="name"/>
        <Form.Label>Author</Form.Label><Form.Control size="sm" type="name"/>
        <div className='Inline mt-2'>
          <Form.Check type="checkbox" label="Favorite" className='mt-2' />
          <Button size="sm" variant="success" type="submit"><i class="bi bi-plus-circle"></i>Add</Button>
        </div>
        
        
      </Container>
        
    );
}
export default Menu;