import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service.ts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) { }

  getListTags(): string[] {
    return this.gifsService.tagsHistory;
  }

  printName(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
