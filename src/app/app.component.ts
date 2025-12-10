import { Component } from '@angular/core';
import { Blague, BlagueService } from './services/blague.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 blague?:Blague;

 constructor (private blagueService: BlagueService) {}
 
 getBlagueRandom(){
  this.blagueService.getRandom().subscribe((data)=>{
this.blague= data;
  });
 }

}
