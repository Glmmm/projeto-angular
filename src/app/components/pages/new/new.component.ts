import { Component } from '@angular/core';
import { FormComponent } from '../../form/form.component';
import { CommonModule } from '@angular/common';
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  btnText = 'Compartilhar';
  constructor(private momentService: MomentService) {}
  async createHandler(moment: Moment | any) {
    const formData = new FormData();
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();
  }
}
