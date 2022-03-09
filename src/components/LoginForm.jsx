import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { loginEmailPassAsync, loginGoogleAsync } from '../actions/actionLogin';
import { useForm } from '../hooks/useForm';

export const LoginForm = () => {

    const dispatch = useDispatch();

    const {values, handleInputChange } = useForm({
        logEmail: '',
        logContraseña: '',
    })

    const { logEmail, logContraseña } = values;

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassAsync(logEmail, logContraseña))
    }

    const handleGoogleAsync = () => {
        dispatch(loginGoogleAsync())
    }

  return (
    <>
          <Form onSubmit={handleLogin}>
              {/* campo email */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name='logEmail' onChange={handleInputChange}/>
              </Form.Group>

                {/* campo contraseña */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"  name='logContraseña' onChange={handleInputChange} />
              </Form.Group>

              {/* submit */}
              <div className='mt-3'>
                <Button variant="dark" type="submit" className='w-100'>
                    Login
                </Button>
              </div>
              
              <div className='mt-3'>
                <Button variant="danger" type="submit" className='w-100' onClick={() => handleGoogleAsync()}>
                    <i className="bi bi-google me-2" />
                    Login with Google
                </Button>
              </div>
              {/* <div className='mt-3'>
                <Button variant="primary" type="submit" className='w-100'>
                    <i className='bi bi-facebook me-2' />
                    Login with Facebook
                </Button>
              </div> */}
          </Form>
    </>
  )
}
