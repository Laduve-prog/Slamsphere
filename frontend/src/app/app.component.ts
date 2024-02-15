import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent, FooterComponent, SignupComponent , CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-angular';
  submitted = false;
  submittedData: any | null = null;

  onDataSubmitted(data: any) {
    const pseudo = data.get('pseudo')?.value;
    const firstname = data.get('firstname')?.value;
    const lastname = data.get('lastname')?.value;
    const email = data.get('email')?.value;
    const address = data.get('address')?.value;
    const phone = data.get('phone')?.value;
    const country = data.get('country')?.value;
    const city = data.get('city')?.value;
    const postalCode = data.get('postalCode')?.value;

    this.submittedData = {
      pseudo,
      firstname,
      lastname,
      email,
      address,
      phone,
      country,
      city,
      postalCode,
    };
  }
}
