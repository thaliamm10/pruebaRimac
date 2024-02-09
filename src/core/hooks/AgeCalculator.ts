import { useState, useMemo } from 'react';

const useAgeCalculator = (birthDate: string): number  => {
    const [age, setAge] = useState<number>(0);

    useMemo(() => {
        if (!birthDate) {
            setAge(0);
            return;
        }

        const birthdayDate = new Date(birthDate);
        const today = new Date();
        const yearsDiff = today.getFullYear() - birthdayDate.getFullYear();
        const isBirthdayPassed =
            today.getMonth() < birthdayDate.getMonth() ||
            (today.getMonth() === birthdayDate.getMonth() &&
                today.getDate() < birthdayDate.getDate());

        setAge(isBirthdayPassed ? yearsDiff - 1 : yearsDiff);
    }, [birthDate]);

    return age;
};

export default useAgeCalculator;
