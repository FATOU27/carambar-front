import { Component } from '@angular/core';
import { BlagueService } from 'src/app/services/blague.service';

@Component({
  selector: 'app-add-blague',
  templateUrl: './add-blague.component.html',
  styleUrls: ['./add-blague.component.css']
})
export class AddBlagueComponent {
question = '';
reponse = '';
message = '';
constructor (private blagueService: BlagueService){}
addBlague(){
  const blague = { question: this.question,
  reponse: this.reponse,
};
this.blagueService.addBlague(blague).subscribe(()=>{
  this.message="Blague ajouter avec succés!";
  this.question;
  this.reponse;
});
}
}
