import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const SearchForm = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(null);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSearch(search)
    }
  return (
    <>
        <div className='container-search w-50 mx-auto mt-4'>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Busca tu pokemon favorito"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={handleChange}
                    />
                    <Button type='submit' variant="danger" id="button-addon2">
                        <i className='bi bi-search'/>
                    </Button>
                </InputGroup>
            </Form>
        </div>
    </>
  )
}

export default SearchForm;