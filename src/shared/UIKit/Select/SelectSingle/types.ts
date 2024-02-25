import { ChangeEvent, MutableRefObject } from "react";
import { TSelectOption } from "../types";

export type HandlingProps = {
  ref: MutableRefObject<HTMLDivElement>;
  inputRef: MutableRefObject<HTMLInputElement>;
  value: TSelectOption;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: () => void;
  handleInputClear: () => void;
  handleSelectOption: (option: TSelectOption) => void;
  showClearButton: boolean;
  showOptions: boolean;
  filteredOptions: TSelectOption[];
};
