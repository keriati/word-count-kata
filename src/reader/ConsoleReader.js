import { print } from 'src/ConsolePrinter.js';

export class ConsoleReader {
    constructor() {
        process.stdin.setEncoding('utf-8');

        print("Enter text: ");
    }

    read(callBack) {
        process.stdin.on('data', callBack);
    }
}
