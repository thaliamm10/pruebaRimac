
import useAgeCalculator from "../../../src/core/hooks/AgeCalculator";


describe('useAgeCalculator', () => {
    test('cálculo de la edad', () => {

        // 1. Initialization
        const birthDate = '02-04-1990';

        // 2. Stimulus
        const age = useAgeCalculator(birthDate);

        // 3. Assertion
        expect(age).toEqual(34);
    });
});
