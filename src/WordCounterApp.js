import { print } from './ConsolePrinter.js';

const NEW_LINE = '\n';

export class WordCounterApp {
    constructor(wordCounter, stopWords, inputReader) {
        this.inputReader = inputReader;
        this.wordCounter = wordCounter;
        this.stopWords = stopWords;
    }

    main() {
        this.handleInput = this.handleInput.bind(this);

        this.inputReader.read(this.handleInput);
    }

    handleInput(data) {
        WordCounterApp.printWordCount(
            this.wordCounter.countWords(
                data,
                this.stopWords
            )
        );
        print(NEW_LINE);
        process.exit(0);
    }

    static printWordCount(numberOfWord) {
        print('Number of words: ' + numberOfWord);
    }
}
