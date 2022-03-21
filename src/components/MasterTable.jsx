import React, { useEffect } from 'react'
import { Col, Figure, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, listMasterAsync } from '../actions/actionMaster';
import '../styles/MasterTable.css';

const MasterTable = () => {

    const dispatch = useDispatch();
    const { masters } = useSelector(store => store.master)
    console.log(masters);

    useEffect(() => {
        dispatch(listMasterAsync())
    }, [dispatch])

    return (
        <div>
            <ul>

                {
                    (masters) ?
                        (
                            masters.map((element, index) => (
                                <li key={index}>
                                    <div className='card-maestro-pokemon m-3'>
                                        <Row>
                                            <Col sm={4} key={index}>
                                                <Figure>
                                                    <Figure.Image
                                                        width={180}
                                                        alt={element.name}
                                                        src={element.image}
                                                    />
                                                </Figure>
                                            </Col>
                                            <Col>
                                                <div className='text-start p-3'>
                                                    <h4>{element.name}</h4>
                                                    <ul>
                                                        <li>Edad: {element.age}</li>
                                                        <li>Tipo: {element.type}</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col sm={3} className='my-3 mx-2'>
                                                {/* <Button variant='dark'>
                                                    <i className="bi bi-pencil-fill"></i>
                                                </Button> */}
                                                <Button
                                                    variant='danger'
                                                    className='ms-2'
                                                    onClick={() => dispatch(deleteAsync(element.name))}
                                                >
                                                    <i className="bi bi-trash3-fill"></i>
                                                </Button>
                                            </Col>

                                        </Row>
                                    </div>
                                </li>
                            ))
                        ) :
                        <p>No hay datos registrados</p>
                }

            </ul>
        </div>
    )
}

export default MasterTable