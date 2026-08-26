// Questo file contiene la logica principale delle Flash Cards.
// E' il componente padre e gestisce l'elenco delle domande, la card corrente, la nav Previous/Next e la % di avanzamento usando signal e computed.

// FASE 1 - IMPORT -- Importo component, computed, signal.
import { Component, computed, signal } from '@angular/core';

// Importo il componente che rappresenta una singola Flash Card.
import { FlashCard } from '../flash-card/flash-card';

// FASE 2 - CONFIGURAZIONE DEL COMPONENTE
@Component({
  // Nome utilizzato per richiamare questo componente nell'HTML.
  selector: 'app-flash-cards',

  // Rendo disponibile il componente FlashCard nel template.
  imports: [FlashCard],

  // File HTML collegato al componente.
  templateUrl: './flash-cards.html',

  // File CSS collegato al componente.
  styleUrl: './flash-cards.css',
})
export class FlashCards {
  // FASE 3 - FLASH CARD PREDEFINITE -- Array che contiene le domande e le risposte.
  cards = [
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

  // FASE 4 - STATO DEL COMPONENTE -- Indica quale flash card stiamo visualizzando. Parte da 0 perché gli array iniziano dalla posizione 0.
  currentIndex = signal(0);

  // FASE 5 - FLASH CARD CORRENTE -- Questo computed restituisce la card corrispondente al valore attuale di currentIndex.
  currentCard = computed(() => {
    return this.cards[this.currentIndex()];
  });

  // FASE 6 - PROGRESSO -- Questo computed calcola la percentuale di avanzamento.
  progress = computed(() => {
    return Math.round(((this.currentIndex() + 1) / this.cards.length) * 100);
  });

  // FASE 7 - CARD SUCCESSIVA
  nextCard() {
    // Controllo di non essere già sull'ultima card.
    if (this.currentIndex() < this.cards.length - 1) {
      this.currentIndex.update((index) => index + 1);
    }
  }

  // FASE 8 - CARD PRECEDENTE
  previousCard() {
    // Controllo di non essere già sulla prima card.
    if (this.currentIndex() > 0) {
      this.currentIndex.update((index) => index - 1);
    }
  }
}
