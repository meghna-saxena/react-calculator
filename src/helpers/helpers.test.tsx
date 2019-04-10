import { getCalculationResult } from '../helpers';

describe('The method getCalculationResult', () => {
    it('should return addition result', () => {
        expect(
            getCalculationResult(1, '+', 1)
        ).toEqual(2);
    });

    it('should return subtraction result', () => {
        expect(
            getCalculationResult(1, '-', 1)
        ).toEqual(0);
    });

    it('should return multiplication result', () => {
        expect(
            getCalculationResult(4, '*', 2)
        ).toEqual(8);
    });

    it('should return division result', () => {
        expect(
            getCalculationResult(10, '/', 2)
        ).toEqual(5);
    });
});
