const STRING_SPACE = ' ';
const REGEXP_GLOBAL_NEW_LINE = /\n/g;

export class WordCounter {
    static countWords(sentence, stopWords = []) {
        if (isEmpty(sentence)) {
            return 0;
        }

        return splitSentenceToWords(sentence)
            .filter(word => !stopWords.includes(word))
            .length;
    }
}

function splitSentenceToWords(sentence) {
    return sentence.replace(REGEXP_GLOBAL_NEW_LINE, STRING_SPACE)
        .trim()
        .split(STRING_SPACE);
}

function isEmpty (sentence) {
    return sentence.trim().length === 0;
}
