import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import Add from '../common/AddLove';
import React, { useState, useEffect } from "react";
function Home(){
  const [Arr,SetArr] = useState([])
  var set = false
  
  const Root = 
  {
      Title : "",
      Author:"",
      Favourite:"false"
  }
 
  useEffect(function(){

  },[addToArr]);
  
  function MyFavorite(e){
      Root.Favourite = e.target.checked

  }

 
  function title(e){
     
      Root.Title = e.target.value
     
      
  }
  function author(e){
      Root.Author = e.target.value
    
  }
  function addToArr(){
      Arr.forEach(e => {
          if (e.Author==Root.Author && e.Title == Root.Title  ){
              
              set = true
              return
          }
      });
      if (set == false && Root.Title != "" && Root.Author !="" ){
          return(
              SetArr([...Arr,Root])
              
          )
      } 
   }

    
    return (
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Text><i class="bi bi-search"></i></InputGroup.Text>
          <Form.Control placeholder="Search" aria-label="Search"/>
        </InputGroup>

        <p>A list of Books</p>
        <ListGroup>
          <Add data={Arr} />
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
        
        <Form.Label>Title</Form.Label><Form.Control size="sm" type="text" onChange={title} name="name"/>
        <Form.Label>Author</Form.Label><Form.Control size="sm" type="text" onChange={author} name="name" />
        <div className='Inline mt-2'>
          <Form.Check type="checkbox" label="Favorite" className='mt-2' onChange={MyFavorite}/>
          <Button onClick={addToArr} size="sm" variant="success" type="submit"><i class="bi bi-plus-circle"></i>Add</Button>
        </div>
      </Container>
        
    );
}
export default Home;