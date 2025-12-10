import { Component } from '@angular/core';
import { Blague, BlagueService } from 'src/app/services/blague.service';

@Component({
  selector: 'app-search-blague',
  templateUrl: './search-blague.component.html',
  styleUrls: ['./search-blague.component.css']
})

export class SearchBlagueComponent {
    id!: number;
 blague : Blague | null = null;
  notFound = false;

  constructor(private blagueService: BlagueService) {}
     search() {
    if (!this.id) return;
   this.blagueService.getById(this.id).subscribe({
      next: (data) => {
        this.blague = data;
        this.notFound = false;
      },
      error: () => {
        this.notFound = true;
        this.blague = null;
      }
    });
  }
}
