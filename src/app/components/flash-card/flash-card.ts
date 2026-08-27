// Questo file contiene la logica di una singola Flash Card. La flash-card è il componente figlio riutilizzabile. Riceve l'intera card tramite input(), gestisce Show/Hide Answer con un signal e comunica al padre i click su Previous e Next tramite output().

// FASE 1 - IMPORT
import { Component, input, output, signal } from '@angular/core';
import { FlashCard as FlashCardData } from '../../models/flash-card';

// FASE 2 - CONFIGURAZIONE DEL COMPONENTE
@Component({
  // Nome utilizzato per richiamare questo componente nell'HTML.
  selector: 'app-flash-card',

  // Questo componente non importa altri componenti Angular.
  imports: [],

  // File HTML collegato al componente.
  templateUrl: './flash-card.html',

  // File CSS collegato al componente.
  styleUrl: './flash-card.css',
})
export class FlashCard {
  // FASE 3 - DATI RICEVUTI DAL COMPONENTE PADRE
  // Ricevo l'intera Flash Card dal componente padre.
  card = input.required<FlashCardData>();

  // FASE 4 - EVENTI INVIATI AL COMPONENTE PADRE -- Comunico al componente padre quando viene premuto Previous o Next.
  previous = output<void>();
  next = output<void>();

  // FASE 5 - STATO DELLA FLASH CARD -- Indica se deve essere mostrata la risposta.
  showAnswer = signal(false);

  // FASE 6 - MOSTRA/NASCONDI RISPOSTA
  toggleAnswer() {
    this.showAnswer.update((value) => !value);
  }

  // FASE 7 - CARD PRECEDENTE
  previousCard() {
    // Quando cambio card torno a mostrare la domanda.
    this.showAnswer.set(false);

    // Comunico al componente padre di andare alla card precedente.
    this.previous.emit();
  }

  // FASE 8 - CARD SUCCESSIVA
  nextCard() {
    // Quando cambio card torno a mostrare la domanda.
    this.showAnswer.set(false);

    // Comunico al componente padre di andare alla card successiva.
    this.next.emit();
  }
}
