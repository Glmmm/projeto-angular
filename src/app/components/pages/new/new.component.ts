import { Component, EventEmitter } from '@angular/core';
import { FormComponent } from '../../form/form.component';
import { CommonModule } from '@angular/common';
import { Moment } from '../../../Moments';
@Component({
  selector: 'app-new',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  btnText = 'Compartilhar';

  async createHandler(moment: Moment | Object) {
    const formData = new FormData();
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }
  }
}
