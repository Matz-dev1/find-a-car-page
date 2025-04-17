import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  class: string;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  model?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}
