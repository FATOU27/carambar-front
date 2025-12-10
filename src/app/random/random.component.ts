import { Component, OnInit } from '@angular/core';
import { BlagueService } from '../services/blague.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit{

   blague: any;
   loading = false;

  constructor(private blagueService: BlagueService) {}

  ngOnInit(): void {
    this.getBlagueRandom(); // Appel automatique au chargement
  }



getBlagueRandom() {
  this.loading = true;

  this.blagueService.getRandom().subscribe((data) => {
    this.blague = data;
    this.loading = false;
  });
}
}

