// StepComponent.tsx
import React from 'react';
import PropTypes from 'prop-types';
import './Step.css';

interface StepProps {
    step: number;
    label: string;
    isActive: boolean;
    isCompleted: boolean;
    onClick: () => void;
}

const Step: React.FC<StepProps> = ({ step, label, isActive, isCompleted, onClick }) => {

    return (
        <div className={` step ${isActive ? 'active' : ''} ${isCompleted ? 'completed step-completed' : ''}`}
             onClick={onClick}>
            <div className="step-circle">{step}</div>
            <div className="step-label">{label}</div>
        </div>
    );
};

Step.propTypes = {
    step: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Step;
