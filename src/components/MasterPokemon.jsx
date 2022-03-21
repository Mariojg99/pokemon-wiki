import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MasterForm from './MasterForm'
import MasterTable from './MasterTable'

const MasterPokemon = () => {
  return (
    <>
        <h2 className='my-3 text-center'>Registra aquí a los Maestros Pokemon</h2>
        <Row>
            <Col sm={4}>
                <MasterForm />
            </Col>
            <Col sm={8} className='list-masters'>
                <MasterTable />
            </Col>
        </Row>
    </>
  )
}

export default MasterPokemon