// DataService.ts
import { useState } from 'react';
import fs from 'fs';
// Define el tipo de los datos que se almacenarán
type Data = {
    id: number;
    name: string;
};

const PlansService = () => {
    // Estado para almacenar los datos
    const [data, setData] = useState<Data[]>([]);

    // Función para agregar un nuevo dato
    const addData = (newData: Data) => {
        setData((prevData) => [...prevData, newData]);

        fs.writeFileSync('data.json', JSON.stringify([...data, newData]));
    };

    // Función para mostrar los datos
    const showData = () => {
        // Lee datos JSON
        const jsonData = fs.readFileSync('data.json', 'utf-8');
        const parsedData = JSON.parse(jsonData);
        console.log(parsedData);
    };

    return { addData, showData };
};

export default PlansService;
