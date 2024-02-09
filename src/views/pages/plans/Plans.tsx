import React, {useState} from 'react';
import Step from "../../../common/components/step/Step";
import './Plans.css';
import {Row} from "react-bootstrap";
import Option from "./options/option/Option";
import Summary from "./options/summary/Summary";
import {useSelector} from 'react-redux';
import useUserService from "../../../core/services/UserService";

const Plans: React.FC<any> = () => {
    const [option, setOption] = useState(0)
    const [data, setData] = useState({})
    const datosPersona = useSelector((state: any) => state.data);
    const {name: firstName, lastName: lastName, birthDay}: any = useUserService();

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
        const persona = datosPersona.data[0];
        setOption(1)
        setData({
            namePlan: val.name,
            price: val.price,
            name: `${firstName} ${lastName}`,
            dni: persona?.documento,
            celular: persona?.telefono
        })
    }


    return (
        <>
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
                <Option priceSelect={selectPrice}/>
            </>) : (option === 1) ? (<>
                <Summary datos={data}/>
            </>) : (<></>)}
        </>);
};

export default Plans;
