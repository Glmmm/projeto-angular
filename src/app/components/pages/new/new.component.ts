import { Component } from '@angular/core';
import { FormComponent } from '../../form/form.component';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';
@Component({
  selector: 'app-new',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  btnText = "Compartilhar";

  createHandler() {
    
  }
}