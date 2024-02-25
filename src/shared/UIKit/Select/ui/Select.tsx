import {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef,
  useRef,
} from "react";
import styles from "./Select.module.scss";

import SelectContext from "./SelectContext";
import SelectOptions from "./SelectOptions";
import SelectControls from "./SelectControls";
import SelectCaret from "./SelectCaret";
import SelectLabel from "./SelectLabel";
import SelectOption from "./SelectOption";
import SelectClear from "./SelectClear";
import SelectInput from "./SelectInput";
import classNames from "@/shared/lib/classNames";
import { TSelectOption } from "../types";
import useOutsideClick from "@/shared/hooks/useOutsideClick";
import { UseSelect } from "../SelectSingle/useSelectSingle";
import { SelectSingleProps } from "../SelectSingle/SelectSingle";

type Props = SelectSingleProps & UseSelect & {
  input: ReactNode;
  controls: ReactNode;
  renderOptions: (filteredOptions: TSelectOption[]) => ReactNode;
};

export const Select = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    onChange,
    options,
    label,
    placeholder = "",
    className,
    input,
    controls,
    renderOptions,
    maxOptionsShown = 5,
    inputRef,
    value,
    handleInputChange,
    handleInputFocus,
    handleInputClear,
    handleSelectOption,
    handleHideOptions,
    showClearButton,
    showOptions,
    filteredOptions,
  } = props;

  useOutsideClick(ref, handleHideOptions);

  return (
    <SelectContext.Provider
      value={{
        onChange,
        options,
        inputRef,
        value,
        handleInputChange,
        handleInputFocus,
        handleInputClear,
        handleSelectOption,
        showClearButton,
        showOptions,
        placeholder,
        maxOptionsShown,
      }}
    >
      <div ref={ref} className={classNames(styles.select, className)}>
        <div className={styles.select__block}>
          <div className={styles.select__block__input}>
            {label}
            {input}
          </div>
          {controls}
        </div>
        {showOptions && renderOptions(filteredOptions)}
      </div>
    </SelectContext.Provider>
  );
};

Select.Options = SelectOptions;
Select.Option = SelectOption;
Select.Controls = SelectControls;
Select.Caret = SelectCaret;
Select.Label = SelectLabel;
Select.Clear = SelectClear;
Select.Input = SelectInput;
