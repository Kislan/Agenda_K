import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FilmeService } from '../filme-service';
import { SearchItem } from './filme';

@Component({
  selector: 'app-consulta-filme',
  imports: [CommonModule],
  templateUrl: './consulta-filme.html',
  styleUrl: './consulta-filme.css',
})
export class ConsultaFilme {
  #filmeService = inject(FilmeService);
  protected busca = signal('');
  protected filmes = signal<SearchItem[]>([]);
  protected buscaRealizada = signal(false); 

  constructor() {
    if (this.busca()) {
      this.buscarFilmes(this.busca());
    }
  }

  atualizarBusca(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.busca.set(input.value);
  }

  buscarFilmes(titulo: string) {
    const termo = titulo.trim();
    if (!termo) return;

    this.filmes.set([]);
    this.buscaRealizada.set(true);

    this.#filmeService.buscarFilmes(termo).subscribe({
      next: (res) => {
        if (res.Response === 'True' && res.Search) {
          this.filmes.set(res.Search);
        } else {
          this.filmes.set([]);
        }
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
        this.filmes.set([]);
      }
    });
  }
}