// Questo file contiene la logica principale delle Flash Cards. E' il componente padre e gestisce la card corrente, la navigazione Previous/Next e la percentuale di avanzamento
// usando signal e computed.

// FASE 1 - IMPORT
import { Component, computed, inject, signal } from '@angular/core';
import { FlashCard } from '../flash-card/flash-card';
import { FlashCardsService } from '../../services/flash-cards';

// FASE 2 - CONFIGURAZIONE DEL COMPONENTE
@Component({
  selector: 'app-flash-cards',

  // Rendo disponibile il componente FlashCard nel template.
  imports: [FlashCard],

  templateUrl: './flash-cards.html',

  styleUrl: './flash-cards.css',
})
export class FlashCards {
  // FASE 3 - SERVICE -- Recupero il service che contiene le Flash Cards.
  private flashCardsService = inject(FlashCardsService);

  // Recupero l'elenco delle card dal service.
  cards = this.flashCardsService.cards;

  // FASE 4 - STATO DEL COMPONENTE -- Indica quale flash card stiamo visualizzando. Parte da 0 perché gli array iniziano dalla posizione 0.
  currentIndex = signal(0);

  // FASE 5 - FLASH CARD CORRENTE -- Restituisce la card corrispondente al valore attuale di currentIndex.
  currentCard = computed(() => {
    return this.cards[this.currentIndex()];
  });

  // FASE 6 - PROGRESSO -- Calcola la percentuale di avanzamento.
  progress = computed(() => {
    return Math.round(((this.currentIndex() + 1) / this.cards.length) * 100);
  });

  // FASE 7 - CAMBIO CARD -- Gestisco il passaggio alla card precedente o successiva.
  changeCard(direction: 'prev' | 'next') {
    if (direction === 'next' && this.currentIndex() < this.cards.length - 1) {
      this.currentIndex.update((index) => index + 1);
    }

    if (direction === 'prev' && this.currentIndex() > 0) {
      this.currentIndex.update((index) => index - 1);
    }
  }
}
