import { CommonModule, } from '@angular/common';
import { Component, Input, Output, importProvidersFrom } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EventEmitter } from 'stream';
import { Moment } from '../../Moments';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!: string;

  momentForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl<string | File>(''),
  });

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);
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
