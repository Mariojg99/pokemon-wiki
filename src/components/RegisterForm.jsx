import React, { useState } from 'react'
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { registerAsync } from '../actions/actionRegistro';

export const RegisterForm = () => {

    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const {values, handleInputChange, reset } = useForm({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = values;


    const handleRegistro = (e) => {
        e.preventDefault();
        reset();
        console.log(values);
        dispatch(registerAsync(email, password, name));
        setShow(true);
    }

  return (
    <>
        <Form 
            onSubmit={handleRegistro}
        >
            
            {/* nombres */}
            <Form.Group className='mb-3'>
                <Form.Label>Nombres</Form.Label>
                <Form.Control type='text' 
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                />
            </Form.Group>


            {/* correo */}
            <Form.Group className='mb-3'>
                <Form.Label>Correo</Form.Label>
                <Form.Control type='email' 
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                />
            </Form.Group>

            {/* contraseña */}
            <Form.Group className='mb-3'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' 
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                />
            </Form.Group>
            
            <div className='mt-3'>
                <Button type='submit' variant='danger' className='w-100'>Registrarse</Button>
            </div>
        </Form>

        <ToastContainer className="p-3" position='top-end'>
          <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
              <Toast.Header>
                  <img
                      src="https://res.cloudinary.com/karma09-jm/image/upload/v1646020505/Pokemon/Pok%C3%A9_Ball_icon.svg_xfnnva.png"
                      className="rounded me-2"
                      alt="pokeball"
                      width={20}
                  />
                  <strong className="me-auto">Pokedex</strong>
              </Toast.Header>
              <Toast.Body>Nuevo usuario registrado!</Toast.Body>
          </Toast>
        </ToastContainer>


    </>
  )
}
