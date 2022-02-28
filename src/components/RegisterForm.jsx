import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { registerAsync } from '../actions/actionRegistro';
import { useForm } from '../hooks/useForm';

const RegisterForm = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        nombres: '',
        apellidos: '',
        email: '',
        contraseña: ''
    });

    const { nombres, apellidos, email, contraseña } = values;


    const handleRegistro = (e) => {
        e.preventDefault();
        console.log(values);
        dispatch(registerAsync(email, contraseña, nombres, apellidos))
    }

  return (
    <>
        <Form onSubmit={handleRegistro}>
            
            {/* nombres */}
            <Form.Group>
                <Form.Label>Nombres</Form.Label>
                <Form.Control type='text' 
                    name='nombres'
                    value={nombres}
                    onChange={handleInputChange}
                />
            </Form.Group>

            {/* apellidos */}
            <Form.Group>
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type='text' 
                    name='apellidos'
                    value={apellidos}
                    onChange={handleInputChange}
                />
            </Form.Group>

            {/* correo */}
            <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control type='email' 
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                />
            </Form.Group>

            {/* contraseña */}
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' 
                    name='contraseña'
                    value={contraseña}
                    onChange={handleInputChange}
                />
            </Form.Group>
            
            <div className='mt-3'>
                <Button type='submit' variant='danger' className='w-100'>Registrarse</Button>
            </div>
        </Form>
    </>
  )
}

export default RegisterForm