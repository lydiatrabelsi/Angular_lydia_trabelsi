import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    //Ajout d'un nv ticket dans ticketList
    this.ticketList.push(ticket);
    //Mise à jour de l’observable
    this.tickets$.next(this.ticketList);
  }

  deleteTicket(ticket: Ticket) {
    const i = this.ticketList.findIndex(t => t === ticket);
    if (i !== -1) {
      this.ticketList.splice(i, 1);
      this.tickets$.next(this.ticketList);
    }
  }
}
