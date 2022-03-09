import React, { useState } from 'react'
import { ButtonGroup, Col, Row, Tab, Tabs, ToggleButton } from 'react-bootstrap'
import {LoginForm} from './LoginForm'
import {RegisterForm} from './RegisterForm'
import '../styles/Autentication.css'

const Autentication = () => {
    const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='container-autentication'>
        <Row>

            {/* formulario */}
            <Col>
                <div className='container-col-form'>
                    <div className='text-center my-3'>
                        <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1646021226/Pokemon/2560px-International_Pok%C3%A9mon_logo.svg_oqz6j3.png" alt="pokemon-logo" width={300}/>
                    </div>
                    <div className='text-center my-2'>
                        <ButtonGroup>
                            <ToggleButton
                                type='radio'
                                variant='outline-dark'
                                onClick={() => setIsLogin(true)}
                            >
                                Iniciar Sesión
                            </ToggleButton>

                            <ToggleButton
                                type='radio'
                                variant='outline-dark'
                                onClick={() => setIsLogin(false)}
                            >
                                Registrarse
                            </ToggleButton>
                        </ButtonGroup>
                    </div>
                    <div className='container-form'>
                        {
                            isLogin
                            ? <LoginForm />
                            : <RegisterForm />
                        }    
                    </div>
                </div>
            </Col>
            <Col></Col>
        </Row>
    </div>
  )
}

export default Autentication