import React, {useEffect, useState} from 'react';
import {Card} from "react-bootstrap";
import imgH from "../../../../../assets/images/IcHospitalLight.png";


interface Plans {
    name: string,
    price: number,
    description: string[],
    age: number
}

interface PersonalProps {
    edad?: number;
    opcion?: string;
    selectedPlan: (nuevoValor: Plans) => void;
}

const Plan: React.FC<PersonalProps> = ({edad = 25, opcion, selectedPlan}) => {

    const [plan, setPlan] = useState([])
    const dt: any = require('../../../../../assets/json/plans.json');
    const cargarPlans = () => {
        let data = dt.list.filter((item: { age: number; }) => item.age > edad)
        setPlan(data)
    }

    const selectedValor = (plan: Plans) => {

        selectedPlan(plan)

    }


    useEffect(() => {
        cargarPlans()
    }, [])

    return (
        <div className="row justify-content-center align-content-center planes-v">
            {
                plan.map((plan: Plans, index: number) => (
                    <div className="col-3" key={index}>
                        <Card style={{width: '18rem'}} className={'card-cotiza'}>
                            <Card.Body>
                                <div className={'d-flex justify-content-between align-items-center'}>
                                    <div>
                                        {plan.name === 'Plan en Casa y Clínica' ? (
                                            <span className={'recomend'}>Plan recomendado</span>) : (<></>)}
                                        <p className={'txt-plan-home'}>{plan.name}</p>
                                    </div>
                                    <div>
                                        <img src={imgH} alt="" className="img-home"/>
                                    </div>
                                </div>
                                <p>Costo del plan</p>
                                {opcion === '2' && <p><s>$49 antes</s></p>}

                                <p>{`S/${opcion === '1' ? plan.price : (plan.price - plan.price * 0.05)} al mes`}</p>
                                <ul>
                                    {plan.description.map((item, i) => (
                                        <li key={i} className={'txt-plans'}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p>Edad permitida: {plan.age} años</p>
                                <button className={'btn-plan txt-select-plan'}
                                        onClick={() => selectedValor(plan)}>Seleccionar Plan
                                </button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
};

export default Plan;
