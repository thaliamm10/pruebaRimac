import useAgeCalculator from "../../../src/core/hooks/AgeCalculator";
import {renderHook} from "@testing-library/react";


describe('useAgeCalculator', () => {
    it('retorna 0 si birthDate no está provisto', () => {
        // Arrange
        const { result, rerender } = renderHook(({ birthDate }) => useAgeCalculator(birthDate), {
            initialProps: {
                birthDate: '',
            },
        });

        // Assert
        expect(result.current).toBe(0);

        // Act y Assert (para asegurar que también funcione con '')
        rerender({ birthDate: '' });
        expect(result.current).toBe(0);
    });

    it('calcula la edad correcta basándose en birthDate', () => {
        // Arrange
        const birthDate = '1990-01-01'; // Suponiendo que la fecha de nacimiento es el 1 de enero de 1990
        const today = new Date('2024-01-01'); // Suponiendo que la fecha actual es el 1 de enero de 2024
        // @ts-ignore
        jest.spyOn(global, 'Date').mockImplementation(() => today);

        // Act
        const { result } = renderHook(() => useAgeCalculator(birthDate));

        // Assert
        expect(result.current).toBe(34); // 2024 - 1990 = 34

        // Simulando que ya pasó el cumpleaños
        today.setMonth(0); // Enero
        today.setDate(2); // 2 de enero
        const { result: resultBirthdayPassed } = renderHook(() => useAgeCalculator(birthDate));
        expect(resultBirthdayPassed.current).toBe(33); // Ya pasó el cumpleaños, así que se resta 1 a la edad
    });
});