import { Injectable } from '@angular/core';
import { FlashCard } from '../models/flash-card';

@Injectable({
  providedIn: 'root',
})
export class FlashCardsService {
  cards: FlashCard[] = [
    {
      question: 'What is the difference between var, let, and const?',
      answer:
        'var is function-scoped, while let and const are block-scoped. Let can be reassigned, while const cannot be reassigned.',
    },
    {
      question: 'What is a JavaScript function?',
      answer: 'A function is a reusable block of code that performs a specific task.',
    },
    {
      question: 'What is an array in JavaScript?',
      answer: 'An array is used to store multiple values inside a single variable.',
    },
    {
      question: 'What is an object in JavaScript?',
      answer: 'An object stores data using properties made of keys and values.',
    },
    {
      question: 'What is a loop in JavaScript?',
      answer: 'A loop is used to repeat a block of code multiple times.',
    },
    {
      question: 'What is a conditional statement?',
      answer:
        'A conditional statement runs different code depending on whether a condition is true or false.',
    },
    {
      question: 'What is a string in JavaScript?',
      answer: 'A string is a sequence of characters used to represent text.',
    },
    {
      question: 'What is a boolean value?',
      answer: 'A boolean can have only two values: true or false.',
    },
    {
      question: 'What does console.log() do?',
      answer: 'console.log() displays a value or message in the browser console.',
    },
    {
      question: 'What is an event in JavaScript?',
      answer:
        'An event is an action such as a click, key press, or page load that can trigger code.',
    },
  ];
}
