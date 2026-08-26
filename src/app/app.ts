// Importo Component per creare il componente principale e poi importo il componente FlashCards.
import { Component } from '@angular/core';
import { FlashCards } from './components/flash-cards/flash-cards';

@Component({
  selector: 'app-root',

  imports: [FlashCards],

  templateUrl: './app.html',
})
export class App {}
