import { ChangeEvent, useRef, useState } from "react";
import { TSelectOption } from "../types";

export type UseSelect = any;

export const useSelectSingle = ({
  options = [],
  onChange = () => {},
  defaultValue,
  disableClear = false,
}: UseSelect) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState({
    id: defaultValue?.id ?? null,
    title: defaultValue?.title ?? "",
  });

  const [filteredOptions, setFilteredOptions] = useState<TSelectOption[]>([]);
  const [showOptions, setShowOptions] = useState(false);

  const showClearButton = !disableClear && Boolean(value.title.length);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setValue({ ...value, title });

    const filteredOptions = options.filter((option: any) =>
      option.title.toLowerCase().includes(value.title.toLowerCase())
    );

    setFilteredOptions(filteredOptions);
    setShowOptions(true);
  };

  const handleSelectOption = (option: TSelectOption) => {
    onChange(option);
    setValue(option);

    setFilteredOptions([]);
    setShowOptions(false);
  };

  const handleHideOptions = () => {
    setShowOptions(false);
  };

  const handleInputFocus = () => {
    setFilteredOptions(options);
    setShowOptions(true);
  };

  const handleInputClear = () => {
    onChange(null);

    setValue({
      id: null,
      title: "",
    });

    setFilteredOptions(options);
    setShowOptions(true);

    inputRef?.current?.focus();
  };

  return {
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
  } as const;
};
