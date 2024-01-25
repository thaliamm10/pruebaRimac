import { useEffect, useState } from 'react';

interface UserDetail {
    name: string;
    lastName: string;
    birthDay: string;
}

const useJSONDtl = (jsonUrl: string) => {
    const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(jsonUrl);

                if (!response.ok) {
                    throw new Error(`Error al cargar el JSON. Código de estado: ${response.status}`);
                }

                const data = await response.json();
                console.log('Contenido del JSON:', data);
                setUserDetail(data);
            } catch (error) {
                // @ts-ignore
                console.error(error.message);
            }
        };


        fetchData();
    }, [jsonUrl]);

    return userDetail;
};

export default useJSONDtl;
