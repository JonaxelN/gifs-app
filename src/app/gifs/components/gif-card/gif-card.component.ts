import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})


/**
 * * Para evitar poner el operador ! o ? en el objeto obligatorio
 * * ocupamos el OnInit para inicializar el objeto (gif: Gif)
 */
export class GifCardComponent implements OnInit {
  @Input()
  public gif!: Gif;


  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
