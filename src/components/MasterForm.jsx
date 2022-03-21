import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { registerMasterAsync } from '../actions/actionMaster';
import { fileUpload } from '../helpers/fileUpload';
import { useForm } from '../hooks/useForm';

const MasterForm = () => {

    const dispatch = useDispatch();

    const { values, handleInputChange, reset } = useForm({
        name: '',
        age: '',
        type: '',
        image: ''
    });

    let {name, age, type, image} = values;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registerMasterAsync(name, age, type, image));
        reset();
        console.log(name, age, type, image);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(resp => {
                image = resp
                console.log(resp);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            <Form className='w-75 mx-auto mt-3' onSubmit={handleRegistro}>
                <Form.Control
                    className='mb-3'
                    type='text'
                    placeholder='Nombre'
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                />
                <Form.Control
                    className='mb-3'
                    type='number'
                    placeholder='Edad'
                    value={age}
                    name='age'
                    onChange={handleInputChange}
                />
                <Form.Select aria-label="Default select example" 
                    className='mb-3' 
                    value={type}
                    name='type' 
                    onChange={handleInputChange}
                >
                    <option>Selecciona el tipo de maestro Pokemon</option>
                    <option value="líder de gimnasio">Líder de Gimnasio</option>
                    <option value="coordinador pokemon">Coordinador Pokemon</option>
                    <option value="alto mando">Alto Mando</option>
                    <option value="as del frente de batalla">As del Frente de Batalla</option>
                    <option value="maestro pokemon">Maestro Pokemon</option>
                    <option value="entrenador legendario">Entrenador Legendario</option>
                </Form.Select>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control 
                        type="file"
                        value={image}
                        name='image'
                        onChange={handleFileChange}
                    />
                </Form.Group>
                <Button type='submit' variant='danger' className='w-100'>Registrar</Button>
            </Form>

        </>
    )
}

export default MasterForm