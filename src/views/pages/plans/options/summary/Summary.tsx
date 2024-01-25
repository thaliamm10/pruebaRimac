import React from 'react';
import {Card, Row} from "react-bootstrap";


const Summary = (datos: any) => {

    return (
        <>
            <Row>
                <div className="row justify-content-center align-content-center">
                    <p className={'resumen-seguro'}>Resumen del seguro</p>
                    <div className="col-12">
                        <Card style={{width: '18rem'}} className={'card-cotiza'}>
                            <Card.Header>
                                <p className={'precio'}>PRECIOS CALCULADOS PARA:</p>
                                <i className={'fa fa-users'}></i> Rocio
                            </Card.Header>
                            <Card.Body>

                                <h5>Responsable de pago</h5>
                                <p>DNI:{datos.dni}</p>
                                <p>Celular:{datos.celular}</p>
                                <br/>
                                <h5>Plan elegido</h5>
                                <p>{datos.namePlan}</p>
                                <p>Costo del Plan: {datos.price} al mes</p>
                            </Card.Body>
                        </Card>

                    </div>

                </div>
            </Row>
        </>
    );
};

export default Summary;