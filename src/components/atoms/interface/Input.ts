export interface BaseInputProps {
  type?: "text" | "password" | "email" | "number";
  name?: string;
  modelValue: string | number;
}
