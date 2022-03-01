import React from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import {LoginForm} from './LoginForm'
import {RegisterForm} from './RegisterForm'
import '../styles/Autentication.css'

const Autentication = () => {
  return (
    <div className='container-autentication'>
        <Row>

            {/* formulario */}
            <Col>
                <div className='container-col-form'>
                <div className='text-center my-3'>
                    <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1646021226/Pokemon/2560px-International_Pok%C3%A9mon_logo.svg_oqz6j3.png" alt="pokemon-logo" width={300}/>
                </div>
                  <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3">
                      <Tab eventKey="login" title="Login">
                          <LoginForm />
                      </Tab>
                      <Tab eventKey="registrarse" title="Registrarse">
                          <RegisterForm />
                      </Tab>
                  </Tabs>
                </div>
            </Col>
            <Col></Col>
        </Row>
    </div>
  )
}

export default Autentication