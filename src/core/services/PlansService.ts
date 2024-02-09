import {useEffect, useState} from 'react';
import axios from 'axios';
import {URL_PLANS} from "../../common/constants/Services.constant";

const usePlansService = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get<any>(URL_PLANS);
                setPlans(response.data.list);
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };

        fetchPlans();

        return () => {
            // Cleanup function if necessary
        };
    }, []); // Empty dependency array to fetch data only once

    return plans;
};

export default usePlansService;
