import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule , ChildComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  nom :String  = "Toto";
  valid: boolean = true;
  message: String = "";
  compteur: number = 0;

  click() {
    this.compteur++;
    this.message = "Vous avez cliqué " + this.compteur + " fois";
    if(this.compteur > 5) {
      this.valid = false;
    }
  }

  logPrenomNom(event:String){
    console.log(event);
  }
}
