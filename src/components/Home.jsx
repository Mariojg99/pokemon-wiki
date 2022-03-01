import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import {Pokemon} from './Pokemon';

const Home = () => {
  return (
    <div>
        <div className='container-search w-50 mx-auto mt-4'>
            <Form>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Busca tu pokemon favorito"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-primary" id="button-addon2">
                        <i className='bi bi-search'/>
                    </Button>
                </InputGroup>
            </Form>
        </div>
        <div className='mt-4'>
            <Pokemon />
        </div>
    </div>
  )
}

export default Home;
