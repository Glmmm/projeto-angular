import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moments';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment_production } from '../../../../environments/environment_production';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesService } from '../../../services/messages.service';
@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css',
})
export class MomentComponent {
  moment?: Moment;
  baseApiUrl = environment_production.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;
  constructor(
    private messagesService: MessagesService,
    private momentService: MomentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    });
  }
  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe()

    this.messagesService.add("Momento excluido com sucesso!")
    this.router.navigate(['/'])
  }
}
