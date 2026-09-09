// Questo file contiene la logica di una singola Flash Card. La flash-card è il componente figlio riutilizzabile. Riceve l'intera card tramite input(), gestisce Show/Hide Answer con un signal e comunica al padre il tipo di navigazione tramite output().

// FASE 1 - IMPORT
import { Component, input, output, signal } from '@angular/core';
import { FlashCard as FlashCardData } from '../../models/flash-card';

// FASE 2 - CONFIGURAZIONE DEL COMPONENTE
@Component({
  selector: 'app-flash-card',
  imports: [],
  templateUrl: './flash-card.html',
  styleUrl: './flash-card.css',
})
export class FlashCard {
  // FASE 3 - DATI RICEVUTI DAL COMPONENTE PADRE -- Ricevo l'intera Flash Card dal componente padre.
  card = input.required<FlashCardData>();

  // FASE 4 - EVENTO INVIATO AL COMPONENTE PADRE -- Comunico al componente padre se deve andare alla card precedente o successiva.
  cardChange = output<'prev' | 'next'>();

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
    this.cardChange.emit('prev');
  }

  // FASE 8 - CARD SUCCESSIVA
  nextCard() {
    // Quando cambio card torno a mostrare la domanda.
    this.showAnswer.set(false);

    // Comunico al componente padre di andare alla card successiva.
    this.cardChange.emit('next');
  }
}
