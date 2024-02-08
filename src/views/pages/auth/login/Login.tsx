import React, {startTransition, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Card, Row, Form} from "react-bootstrap";
import usePlansService from "../../../../core/hooks/services/PlansRService";
import {useNavigate} from "react-router-dom";
import {
    CAMPO_CANTIDAD_CARACTERES,
    CAMPO_NUMERICO,
    CAMPO_OBLIGATORIO, CAMPO_POLITICA_COMERCIAL,
    CAMPO_POLITICA_PRIVACIDAD
} from "../../../../common/constants/Auth.constant";
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const {addDataToRedux} = usePlansService();
    const [load, setLoad] = useState(false);
    // Inicialización de campos
    const initialValues = {
        documento: '',
        telefono: '',
        terminos1: false,
        terminos2: false,

    };
    // Validación de campos
    const validationSchema =
        Yup.object({
            documento: Yup.string()
                .required(CAMPO_OBLIGATORIO)
                .matches(/^[0-9]+$/, CAMPO_NUMERICO)
                .min(8, ` ${CAMPO_CANTIDAD_CARACTERES} 8 dígitos`),
            telefono: Yup.string()
                .required(CAMPO_OBLIGATORIO)
                .matches(/^[0-9]+$/, CAMPO_NUMERICO)
                .min(11, ` ${CAMPO_CANTIDAD_CARACTERES} 11 dígitos`),
            terminos1: Yup.boolean()
                .oneOf([true], CAMPO_POLITICA_PRIVACIDAD),
            terminos2: Yup.boolean()
                .oneOf([true], CAMPO_POLITICA_COMERCIAL),
        });

    // Cambia clase de Estilos de campos según validación
    const getValidationClass = (touched: boolean | undefined, error: string | undefined) => (touched && error ? 'is-invalid' : '');

    // Metodo para guardar campos
    const handleSubmit = (values: any) => {
        handleAddData(values)
    };
    const handleAddData = (row: any) => {
        setLoad(true);
        const newData = {
            ...row
        };

        try {
            startTransition(() => {
                addDataToRedux(newData);
                setLoad(false);
                navigate("/plans");
            });
        } catch (error) {
            navigate("/error", {state: {message: "Error"}});
        }
    };

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


    return (
        <div>
            <div className={'frame1000004368'}>
                <span className={'tag-promo'}>Seguro Salud Flexible</span>
                <p className={'txtF'}>Creado para ti y tu familia</p>
                <p className={'subtitle-14'}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
                    asesoría. 100% online.</p>
            </div>
            <Row>
                <Card.Body>
                    <form>
                        {/*<div className={'frame1000004290'}>*/}
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <Form.Group controlId="documento">
                                            <Form.Label>Documento:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="documento"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.documento}
                                                maxLength={8}
                                                className={getValidationClass(formik.touched.documento, formik.errors.documento)}
                                            />
                                            {formik.touched.documento && formik.errors.documento && (
                                                <Form.Control.Feedback
                                                    type="invalid">{formik.errors.documento}</Form.Control.Feedback>
                                            )}
                                        </Form.Group>
                                    </div>
                                    <div className="col-12">
                                        <Form.Group controlId="telefono">
                                            <Form.Label>Teléfono:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="telefono"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.telefono}
                                                maxLength={11}
                                                className={getValidationClass(formik.touched.telefono, formik.errors.telefono)}
                                            />
                                            {formik.touched.telefono && formik.errors.telefono && (
                                                <Form.Control.Feedback
                                                    type="invalid">{formik.errors.telefono}</Form.Control.Feedback>
                                            )}
                                        </Form.Group>
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>

                                    <div className="col-12">
                                        <Form.Group controlId="terminos1">
                                            <Form.Check
                                                type="checkbox"
                                                name="terminos1"
                                                label="Acepto la Política de Privacidad"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                checked={formik.values.terminos1}
                                                className={getValidationClass(formik.touched.terminos1, formik.errors.terminos1)}
                                            />
                                            {formik.touched.terminos1 && formik.errors.terminos1 && (
                                                <div
                                                    className="invalid-feedback d-block">{formik.errors.terminos1}</div>
                                            )}
                                        </Form.Group>
                                    </div>
                                    <div className="col-12">
                                        <Form.Group controlId="terminos2">
                                            <Form.Check
                                                type="checkbox"
                                                name="terminos2"
                                                label="Acepto la Política Comunicaciones Comerciales"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                checked={formik.values.terminos2}
                                                className={getValidationClass(formik.touched.terminos2, formik.errors.terminos2)}
                                            />
                                            {formik.touched.terminos2 && formik.errors.terminos2 && (
                                                <div
                                                    className="invalid-feedback d-block">{formik.errors.terminos2}</div>
                                            )}
                                        </Form.Group>
                                    </div>

                                    <label>Aplican Términos y Condiciones.</label>

                                    <div>
                                        {load ? (<button type="button"
                                                         disabled={true}
                                                         className={'btn-cotiza'}

                                        >Un momento por favor...
                                        </button>) : (
                                            <button
                                                type="submit"
                                                className={'btn-cotiza'}
                                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                    e.preventDefault();
                                                    // @ts-ignore
                                                    formik.handleSubmit(e);
                                                }}
                                            >
                                                Cotiza aquí
                                            </button>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*</div>*/}
                    </form>
                </Card.Body>
            </Row>

        </div>

    );
};

export default Login;
