import { Component } from '@angular/core';
import { FormComponent } from '../../form/form.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  btnText = "Compartilhar";
}