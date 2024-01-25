import React from 'react';
import {Card, Form} from "react-bootstrap";
import imgMe from "../../../../../assets/images/IcProtectionLight.svg";
import imgMore from "../../../../../assets/images/IcAddUserLight.png";
import Personal from "../personal/Personal";
import {useFormik} from "formik";
import * as Yup from "yup";

interface UserDetail {
    name: string;
    lastName: string;
    birthDay: string;
}

const Price = () => {
    const userDetail: UserDetail = require('../../../../../assets/json/user.json');

    const initialValues = {
        opcionC: ''

    };
    const validationSchema = Yup.object({
        opcionC: Yup.boolean()
            .oneOf([true], 'Debe aceptar los términos de Política Comunicaciones Comerciales'),
    });


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            // handleSubmit({
            //     ...values
            // });
        },
    });
    return (
        <>
            <div className="row justify-content-center align-content-center">
                <div className="col-12">
                    <p className={'txt-principal'}>{userDetail.name} ¿Para quién deseas cotizar?</p>
                    <p className={'txt-principal2'}>Selecciona opción que se ajuste más a tus necesidades</p>
                </div>
                <div className="col-3 col-offset-3">
                    <Card style={{width: '18rem'}} className={'card-cotiza'}>
                        <Card.Body>
                            <div className={'d-flex justify-content-between align-items-cente'}>
                                <div>
                                    <img src={imgMe} alt="Para mí"/>
                                </div>
                                <div className="ml-auto">
                                    <Form.Check
                                        type='radio'
                                        name='opcionC'
                                        id='id2'
                                        className='fw-bold'
                                        checked={formik.values.opcionC === '1'}
                                        value={'1'}
                                        onChange={(e) => {
                                            formik.setFieldValue('opcionC', '1');
                                        }}
                                    />
                                </div>
                            </div>
                            <p className={'txt-tplans'}>Para mí</p>
                            <p className={'txt-plans'}>
                                Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                            </p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-3">
                    <Card style={{width: '18rem'}} className={'card-cotiza'}>
                        <Card.Body>
                            <div className={'d-flex justify-content-between align-items-cente'}>
                                <div>
                                    <img src={imgMore} alt=""/>
                                </div>
                                <div className="ml-auto">
                                    <Form.Check
                                        type='radio'
                                        name='opcionC'
                                        id='id1'
                                        className='fw-bold'
                                        value={'2'}
                                        checked={formik.values.opcionC === '2'}
                                        onChange={(e) => {
                                            formik.setFieldValue('opcionC', '2')
                                        }}
                                    />
                                </div>
                            </div>
                            <p className={'txt-tplans'}>Para alguien más</p>
                            <p className={'txt-plans'}>Realiza una cotización para uno de tus familiares o cualquier
                                persona.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {formik.values?.opcionC && (
                <Personal edad={25} opcion={formik.values.opcionC} />
            )}

        </>
    );
};

export default Price;