// StepComponent.tsx
import React from 'react';
import PropTypes from 'prop-types';
import './Step.css';

interface StepProps {
    step: number;
    label: string;
    isActive: boolean;
    isCompleted: boolean;
}

const Step: React.FC<StepProps> = ({ step, label, isActive, isCompleted }) => {
    return (
        <div className={` step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
            <div className="step-circle">{isCompleted ? '✔' : step}</div>
            <div className="step-label">{label}</div>
        </div>
    );
};

Step.propTypes = {
    step: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    isCompleted: PropTypes.bool.isRequired,
};

export default Step;
