import { Component , EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() nomChild: String = "";
  @Output()change: EventEmitter<String> = new EventEmitter<String>();

  prenom: String = "";

  sendParent() {
    this.change.emit(this.prenom + " " + this.nomChild);
  }
}
