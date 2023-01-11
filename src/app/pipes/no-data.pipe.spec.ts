import { NoDataPipe } from "./no-data.pipe";

describe('NoDataPipe', () => {
    const pipe = new NoDataPipe();
    
    it('should display dash for empty value', () => {
        expect(pipe.transform('')).toBe('-');
    });
});