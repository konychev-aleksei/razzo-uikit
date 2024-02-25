import { useSelectSingle } from "./useSelectSingle";
import { TSelectOption } from "../types";
import { Select } from "../ui";

export type SelectSingleProps = {
  onChange: (value: TSelectOption) => void;
  options: TSelectOption[];
  label: string;
  defaultValue: TSelectOption;
  disableClear?: boolean;
  placeholder?: string;
  className?: string | false;
  maxOptionsShown?: number;
};

export const SelectSingle = ({
  label,
  defaultValue,
  onChange,
  options,
  disableClear,
  placeholder,
  className,
  maxOptionsShown,
}: SelectSingleProps) => {
  const {
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
  } = useSelectSingle({
    defaultValue,
    onChange,
    options,
    disableClear,
  });

  return (
    <Select
      placeholder={placeholder}
      className={className}
      maxOptionsShown={maxOptionsShown}
      inputRef={inputRef}
      value={value}
      handleInputChange={handleInputChange}
      handleInputFocus={handleInputFocus}
      handleInputClear={handleInputClear}
      handleSelectOption={handleSelectOption}
      handleHideOptions={handleHideOptions}
      showClearButton={showClearButton}
      showOptions={showOptions}
      filteredOptions={filteredOptions}
      labelElement={<Select.Label>{label}</Select.Label>}
      input={<Select.Input />}
      controls={
        <Select.Controls>
          <Select.Caret />
          <Select.Clear />
        </Select.Controls>
      }
      renderOptions={(filteredOptions: TSelectOption[]) => (
        <Select.Options>
          {filteredOptions.map((option: TSelectOption) => (
            <Select.Option key={option.id} option={option} />
          ))}
        </Select.Options>
      )}
    />
  );
};
