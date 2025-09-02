import { Component } from '@angular/core';

@Component({
  selector: 'app-politica-de-confidentialitate',
  templateUrl: './politica-de-confidentialitate.component.html',
  styleUrls: ['./politica-de-confidentialitate.component.css'],
})
export class PoliticaDeConfidentialitateComponent {
  showFullPolicy: boolean = false;

  togglePolicy(): void {
    this.showFullPolicy = !this.showFullPolicy;
  }
}
