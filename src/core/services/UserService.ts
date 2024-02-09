import {useEffect, useState} from 'react';
import axios from 'axios';
import {URL_USERS} from "../../common/constants/Services.constant";

// type Data = {
//     name: string,
//     lastName: string,
//     birthDay: Date
// };

const useUserService = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<any>(URL_USERS);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUsers();

        return () => {

        };
    }, []);

    return user;
};

export default useUserService;
