import React, {startTransition, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Card, Form, InputGroup} from "react-bootstrap";
import usePlansService from "../../../../core/services/PlansRService";
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
        tipoDocumento:'DNI',
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
                .min(9, ` ${CAMPO_CANTIDAD_CARACTERES} 9 dígitos`),
            terminos1: Yup.boolean()
                .oneOf([true], CAMPO_POLITICA_PRIVACIDAD),
            terminos2: Yup.boolean()
                .oneOf([true], CAMPO_POLITICA_COMERCIAL),
        });

    // Cambia clase de Estilos de campos según validación
    const getValidationClass = (touched: boolean | undefined, error: string | undefined) => (touched && error ? 'is-invalid' : '');

    // Metodo para guardar campos
    const handleSubmit = (values: any) => {
        setLoad(true);
        const newData = {
            ...values
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
        <div className={''}>
            <Card.Body>
                <form>
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className={'lsection1 col-12'}>
                                    {/*Documento*/}
                                    <div className="col-12 mb-2">
                                        <Form.Group controlId="documento">
                                            <InputGroup>
                                                <Form.Select
                                                    as="select"
                                                    name="tipoDocumento"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.tipoDocumento}
                                                    className={getValidationClass(formik.touched.tipoDocumento, formik.errors.tipoDocumento)}
                                                >
                                                    <option value="DNI">DNI</option>
                                                    <option value="Pasaporte">PASAPORTE</option>
                                                </Form.Select>
                                                <Form.Control
                                                    type="text"
                                                    name="documento"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.documento}
                                                    maxLength={8} // Ajustar la longitud máxima según sea necesario
                                                    className={getValidationClass(formik.touched.documento, formik.errors.documento)}
                                                />
                                            </InputGroup>
                                            {(formik.touched.tipoDocumento || formik.touched.documento) && (formik.errors.tipoDocumento || formik.errors.documento) && (
                                                <Form.Control.Feedback type="invalid">
                                                    {formik.errors.tipoDocumento || formik.errors.documento}
                                                </Form.Control.Feedback>
                                            )}
                                        </Form.Group>

                                    </div>
                                    {/*Celular*/}
                                    <div className="col-12">
                                        <Form.Group controlId="telefono">
                                            <Form.Control
                                                type="text"
                                                name="telefono"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.telefono}
                                                maxLength={9}
                                                placeholder={'Celular'}
                                                className={getValidationClass(formik.touched.telefono, formik.errors.telefono)}
                                            />
                                            {formik.touched.telefono && formik.errors.telefono && (
                                                <Form.Control.Feedback
                                                    type="invalid">{formik.errors.telefono}</Form.Control.Feedback>
                                            )}
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className={'lsection2 col-12'}>
                                    {/*Terminos privacidad*/}
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
                                    {/*Terminos comerciales*/}
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

                                    <span className={'lsection2__span'}>Aplican Términos y Condiciones.</span>
                                </div>


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
        </div>

    );
};

export default Login;
