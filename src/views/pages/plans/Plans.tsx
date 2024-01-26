import React, {useState} from 'react';
import Step from "../../../common/components/step/Step";
import './Plans.css';
import {Row} from "react-bootstrap";
import Price from "./options/price/Price";
import Summary from "./options/summary/Summary";


const Plans: React.FC<any> = () => {
    const [option, setOption] = useState(0)
    const [data, setData] = useState({})


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
        setOption(1)
        setData({
            namePlan: val.name,
            price: val.price,
            dni: '2344',
            celular: '32323'
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
