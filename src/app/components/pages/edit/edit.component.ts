import { Component } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../form/form.component';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  moment!: Moment;
  
  btnText: string = 'Editar';
  constructor(
    private momentServie: MomentService,
    private route: ActivatedRoute
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentServie.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    });
  }
}
