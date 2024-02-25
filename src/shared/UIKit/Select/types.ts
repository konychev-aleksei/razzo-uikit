import { Nullable } from "@/shared/types/generics";
import { ChangeEvent, MutableRefObject } from "react";

export type TSelectOption = {
  id: Nullable<number>;
  title: string;
};

export type UserProps = {
  onChange: (value: TSelectOption) => void;
  options: TSelectOption[];
  label: string;
  defaultValue: TSelectOption;
  disableClear?: boolean;
  placeholder?: string;
  className?: string | false;
  maxOptionsShown?: number;
};
