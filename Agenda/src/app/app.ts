import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionaContato } from './adiciona-contato/adiciona-contato';
import { ExibeContatos } from './exibe-contatos/exibe-contatos';
import { FiltroContato } from './filtro-contato/filtro-contato';
import { Cabecalho } from './cabecalho/cabecalho';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdicionaContato, ExibeContatos, FiltroContato, Cabecalho],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('agenda');
}
