export class PrintingService {

    print(text: string): void {
        console.log(text);
    }
}

export class TextService {

    getText(firstName: string, lastName: string): string {
        return `Hello: ${firstName} ${lastName}!`;
    }
}

export class HelloService {

    constructor(
        private readonly printingService: PrintingService,
        private readonly textService: TextService,
    ) { }

    printHelloMessage(firstName: string, lastName: string): void {
        const text = this.textService.getText(firstName, lastName);

        this.printingService.print(text);
    }
}