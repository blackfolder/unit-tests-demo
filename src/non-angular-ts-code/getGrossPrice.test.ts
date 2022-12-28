import { getGrossPrice } from "./getGrossPrice";

describe('getGrossPrice', () => {

    it('should return correct value - sunny day scenario', () => {
        // ARRANGE
        const netPrice = 100;
        const vatRate = 23;

        // ACT
        const grossPrice = getGrossPrice(netPrice, vatRate);

        // ASSERT
        expect(grossPrice).toEqual(123);
        expect(grossPrice).toBe(123);
        expect(grossPrice).toBeTruthy();
        expect(grossPrice).not.toBeFalsy();
    });

    it('should return correct value for zero price - boundry value', () => {
        // ARRANGE
        const netPrice = 0;
        const vatRate = 23;

        // ACT
        const grossPrice = getGrossPrice(netPrice, vatRate);

        // ASSERT
        expect(grossPrice).toEqual(0);
    });

    it('should log calculated value - use jest.fn mock', () => {
        // ARRANGE
        const netPrice = 100;
        const vatRate = 23;
        console.log = jest.fn(); //!!!!!!

        // ACT
        const grossPrice = getGrossPrice(netPrice, vatRate);

        // ASSERT
        expect(console.log).toHaveBeenCalledWith(grossPrice);
    });

    it('should log calculated value - use jest.spyOn', () => {
        // ARRANGE
        const netPrice = 100;
        const vatRate = 23;

        jest.spyOn(console, 'log');

        // ACT
        getGrossPrice(netPrice, vatRate);

        // ASSERT
        // Explain issue with number of calls (beforeEach/console.log = jest.fn();)
        // Pitfall of running tests separately, always run also whole describe block.
        // expect(console.log).toHaveBeenCalledTimes(1);
    });

    it('should throw an error for a negative value', () => {
        // ARRANGE
        const netPrice = -100;
        const vatRate = 23;

        // ACT
        // ASSERT
        // expect(getGrossPrice(netPrice, vatRate)).toThrow();
        expect(() => getGrossPrice(netPrice, vatRate)).toThrow();
    });

    it.each([
        [null, undefined],
        [undefined, null],
        [null, null],
        [undefined, undefined],
        [undefined, 10],
    ])('should throw an error for missing param(s) (%p, %p)', (netPrice, vatRate) => {
        // ASSERT
        expect(() => getGrossPrice(netPrice, vatRate)).toThrow();
    });

    it.each([
        [100, 23, 123],
        [100, 5, 105],
    ])('should return correct value (netPrice: %i, VAT: %i, grossPrice: %i)', (netPrice, vatRate, grossPrice) => {
        // ACT
        const result = getGrossPrice(netPrice, vatRate);

        // ASSERT
        expect(result).toEqual(grossPrice);
    });
});
