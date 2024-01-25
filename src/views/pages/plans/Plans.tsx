import React from 'react';
import Step from "../../../common/components/step/Step";
import './Plans.css';
import {Card, Form, Row} from "react-bootstrap";
import {useFormik} from "formik";
import * as Yup from "yup";

const Plans = () => {
    const initialValues = {
        opcionC: false

    };
    // const getValidationClass = (touched: boolean | undefined, error: string | undefined) => (touched && error ? 'is-invalid' : '');
    //
    const validationSchema = Yup.object({
        opcionC: Yup.boolean()
            .oneOf([true], 'Debe aceptar los términos de Política Comunicaciones Comerciales'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            handleSubmit({
                ...values
            });
        },
    });

    const handleSubmit = (values: any) => {
        console.log('hola')
        // Lógica para manejar la subida del formulario
        console.log(values);
        // handleAddData(values)
    };

    return (
        <>
            <Row>
                <div className="step-container">
                    <Step step={1}
                          label="Planes y coberturas"
                          isActive={true}
                          isCompleted={false}/>
                    <Step step={2}
                          label="Resumen"
                          isActive={false}
                          isCompleted={false}/>
                </div>

                <h1> ¿Para quién deseas cotizar?</h1>
                <p>Selecciona opción que se ajuste más a tus necesidades</p>

                <div className="row">
                    <div className="col-3">
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Form.Check
                                    type='radio'
                                    name='opcionC'
                                    id='id'
                                    className='fw-bold'
                                    value={'0'}
                                    onChange={formik.handleChange}
                                    checked={false}
                                />
                                <h2>Para mí</h2>
                                <p>Cotiza tu seguro de salud y agrega
                                    familiares si así lo deseas.</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-3">
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Form.Check
                                    type='radio'
                                    name='opcionC'
                                    id='id'
                                    className='fw-bold'
                                    value={'0'}
                                    onChange={formik.handleChange}
                                    checked={false}
                                />
                                <h2>Para mí</h2>
                                <p>Cotiza tu seguro de salud y agrega
                                    familiares si así lo deseas.</p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </Row>

        </>);
};

export default Plans;
