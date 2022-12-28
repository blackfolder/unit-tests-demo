export function getGrossPrice(
    netPrice: number | null | undefined,
    vatRateAsPercent: number | null | undefined,
): number {
    if (netPrice == null || vatRateAsPercent == null) {
        throw new Error('Both params must be provided');
    }

    if (netPrice < 0) {
        throw new Error('Price must be a non-negative number');
    }

    if (vatRateAsPercent < 0) {
        throw new Error('VAT rate must be a non-negative number');
    }

    const grossPrice = netPrice * (1 + vatRateAsPercent * 0.01);

    console.log(grossPrice);

    return grossPrice;
}