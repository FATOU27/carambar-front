import { Component, OnInit } from '@angular/core';
import { Blague, BlagueService } from 'src/app/services/blague.service';

@Component({
  selector: 'app-list-blague',
  templateUrl: './list-blague.component.html',
  styleUrls: ['./list-blague.component.css']
})

export class ListBlagueComponent implements OnInit {
   blagues: Blague[] = [];
 constructor(private blagueService: BlagueService) {}
  ngOnInit(): void {
    this.blagueService.getAll().subscribe(data => {
      this.blagues = data;
    });

}
}
