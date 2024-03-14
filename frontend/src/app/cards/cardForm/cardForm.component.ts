import { Component , OnInit} from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { Cards } from '../../models/cards'
import { CardService } from '../card.service';

@Component({
  selector: 'app-cardForm',
  templateUrl: './cardForm.component.html',
  styleUrl: './cardForm.component.css'
})

export class CardFormComponent implements OnInit {
  cardForm!: FormGroup;
  constructor(private fb: FormBuilder, private carteService: CardService) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      nom: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      ccv: ['', [Validators.required, Validators.pattern(/^[0-9]{3}$/)]],
      expiration: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)]]
    });
  }

  onSubmit(): void {
    this.carteService.addCard(this.cardForm.value);
  }
}
