import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Moment, ToForm } from '../../Moments';
import { MomentComponent } from '../pages/moment/moment.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() onSubmit = new EventEmitter<Object>();
  @Input() btnText!: string;

  momentForm = new FormGroup<ToForm<Moment>>({
    id: new FormControl(null),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl<File | string>(''),
  });

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);
    this.onSubmit.emit(this.momentForm.value);
  }

  get title() {
    return this.momentForm.get('title')!;
  }
  get description() {
    return this.momentForm.get('description')!;
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file });
  }
}
