import React, {useState, ChangeEvent} from 'react';
import './AnimateDropdown.css'; // Asegúrate de importar el archivo CSS

interface InputGroupProps {
    label: string;
}

const AnimateDropdown: React.FC<InputGroupProps> = ({label}) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="input-group">
            <select className="dropdown-textfield">
                <option>DNI</option>
                {/* Agrega más opciones según sea necesario */}
            </select>

            <div className="input-container">
                <input
                    type="text"
                    id="inputField2"
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                    className="s-text"
                />
                <label htmlFor="inputField" className={inputValue ? 'active' : ''}>
                    {label}
                </label>
            </div>
        </div>
    );
};

export default AnimateDropdown;
