import React, { useState, ChangeEvent } from 'react';
import './AnimatedInput.css';

interface AnimatedInputProps {
    label: string;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({ label }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="input-container">
            <input
                type="text"
                id="inputField"
                value={inputValue}
                onChange={handleInputChange}
                required
                className="s-text"
            />
            <label htmlFor="inputField" className={inputValue ? 'active' : ''}>
                {label}
            </label>
        </div>
    );
};

export default AnimatedInput;
