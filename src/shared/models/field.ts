export interface Field {
  key: string;
  type: string;
  label?: string;
  required?: boolean;
  options?: Option[];
}

export interface Option {
  label: string;
  value: string;
}

export interface FormField {
  [key: string]: string;
}