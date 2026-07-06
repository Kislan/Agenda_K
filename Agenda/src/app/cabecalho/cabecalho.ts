import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  templateUrl: './cabecalho.html',
  styleUrls: ['./cabecalho.css']
})
export class Cabecalho {
  protected readonly title = signal('Agenda');
}
