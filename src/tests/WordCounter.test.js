import { WordCounter } from './../WordCounter.js';

describe('countWords', () => {
    it('returns the number of words in the sentence', () => {
        const sentence = 'a b';

        const actual = WordCounter.countWords(sentence);

        expect(actual).toEqual(2);
    });

    it('returns 0 when no word is in the input', () => {
        const sentence = '';

        const actual = WordCounter.countWords(sentence);

        expect(actual).toEqual(0);
    });

    it('returns 0 when the input is a new line', () => {
        const sentence = '\n';

        const actual = WordCounter.countWords(sentence);

        expect(actual).toEqual(0);
    });

    it('returns 0 when the input is a space', () => {
        const sentence = ' ';

        const actual = WordCounter.countWords(sentence);

        expect(actual).toEqual(0);
    });

    it('does not count the stop words passed to it', () => {
        const stopWords = ['b'];
        const sentence = 'a a b a';

        const actual = WordCounter.countWords(sentence, stopWords);

        expect(actual).toEqual(3);
    });

    it('does not count the stop words passed to it', () => {
        const stopWords = ['b'];
        const sentence = 'a a\nb a\na b';

        const actual = WordCounter.countWords(sentence, stopWords);

        expect(actual).toEqual(4);
    });
});
