import { mock, MockProxy } from 'jest-mock-extended';

import { HelloService, PrintingService, TextService } from "./helloService";

describe('HelloService', () => {
    let service: HelloService;
    let printingService: MockProxy<PrintingService>;
    let textService: MockProxy<TextService>;

    //beforeAll/afterEach/afterAll
    beforeEach(() => {
        printingService = mock<PrintingService>();
        textService = mock<TextService>();

        service = new HelloService(printingService, textService);
    });

    it('should print message', () => {
        const firstName = 'Damian';
        const lastName = 'Dziura';
        const correctText = 'Hello: Damian Dziura!';
        const fakeText = 'Unit tests are cool!';
        textService.getText.mockReturnValue(fakeText);

        service.printHelloMessage(firstName, lastName);

        expect(textService.getText).toHaveBeenCalledTimes(1);
        expect(textService.getText).toHaveBeenCalledWith(firstName, lastName);
        expect(printingService.print).toHaveBeenCalledTimes(1);
        expect(printingService.print).not.toHaveBeenCalledWith(correctText);
        expect(printingService.print).toHaveBeenCalledWith(fakeText);
    });
});
