import React from 'react';
import Step from "../../../common/components/step/Step";
import './Plans.css';
const Plans = () => {


    return (
        <>
            <div className="step-container">
                <Step step={1} label="Planes y coberturas" isActive={true} isCompleted={false} />
                <Step step={2} label="Resumen" isActive={false} isCompleted={false} />
            </div>


            </>);
};

export default Plans;