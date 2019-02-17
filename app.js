#!/usr/bin/env node
import { WordCounterApp } from 'src/WordCounterApp.js';
import { FileLoader } from 'src/FileLoader.js';
import { WordCounter } from 'src/WordCounter.js';
import { StopWords } from 'src/StopWords.js';
import { Reader } from 'src/reader/Reader.js';

const fileNameArgument = process.argv[2];

const stopWords = new StopWords(
    new FileLoader()
);

const reader = Reader.getReader(fileNameArgument);

const wordCounterApp = new WordCounterApp(
    WordCounter,
    stopWords.getStopWords(),
    reader,
);

wordCounterApp.main();
