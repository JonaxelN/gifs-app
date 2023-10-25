import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service.ts.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifService: GifsService) {

  }

  getGifs(): Gif[] {
    return this.gifService.gifList;
  }
}
