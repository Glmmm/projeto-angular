import { FormControl } from '@angular/forms';

export interface Moment {
  id?: number | null;
  title: string | null;
  description: string | null;
  image: string | File | null;
  created_at?: string | null;
  updated_at?: string | null;
  comments?: [{ text: string; username: string }] | null;
}

export type ToForm<T> = {
  [key in keyof T]: FormControl<T[key]>;
};
