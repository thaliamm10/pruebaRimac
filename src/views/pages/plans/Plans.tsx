import React, {useState} from 'react';
import Step from "../../../common/components/step/Step";
import './Plans.css';
import {Row} from "react-bootstrap";
import Price from "./options/price/Price";
import Summary from "./options/summary/Summary";
import {useSelector} from 'react-redux';

const Plans: React.FC<any> = () => {
    const [option, setOption] = useState(0)
    const [data, setData] = useState({})
    const datosPersona = useSelector((state: any) => state.data);


    const [steps, setSteps] = useState([
        {step: 1, label: 'Planes y coberturas         ....', isActive: true, isCompleted: false},
        {step: 2, label: 'Resumen', isActive: false, isCompleted: false},
    ]);

    const handleStepClick = (index: number) => {
        const updatedSteps = steps.map((step, i) => ({
            ...step,
            isActive: i === index,
            isCompleted: i < index,
        }));

        setSteps(updatedSteps);
        setOption(index)

    };

    const selectPrice = (val: any) => {
        console.log()
        const persona = datosPersona.data[0];

        setOption(1)
        setData({
            namePlan: val.name,
            price: val.price,
            dni: persona?.documento,
            celular: persona?.telefono
        })
    }


    return (
        <>
            <Row>
                <div className="step-container">
                    {steps.map((step, index) => (
                        <Step
                            key={index}
                            step={step.step}
                            label={step.label}
                            isActive={step.isActive}
                            isCompleted={step.isCompleted}
                            onClick={() => handleStepClick(index)}
                        />
                    ))}
                </div>

                {(option === 0) ? (<>
                    <Price priceSelect={selectPrice}/>
                </>) : (option === 1) ? (<>
                    <Summary datos={data}/>
                </>) : (<></>)}
            </Row>

        </>);
};

export default Plans;
