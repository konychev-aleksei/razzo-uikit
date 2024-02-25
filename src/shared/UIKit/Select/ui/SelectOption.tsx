import styles from "./Select.module.scss";
import cn from "@/shared/lib/classNames";
import { useSelectContext } from "./SelectContext";
import { TSelectOption } from "..";
import { useEffect, useRef } from "react";

type Props = {
  option: TSelectOption;
};

const SelectOption = ({ option }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);

  const { value, handleSelectOption } = useSelectContext();

  const isSelected = option.id === value.id;

  useEffect(() => {
    if (isSelected) {
      ref?.current?.scrollIntoView();
    }
  }, [isSelected]);

  return (
    <button
      ref={ref}
      className={cn(
        styles.select__options__option,
        isSelected && styles.select__options__option_chosen
      )}
      onClick={() => handleSelectOption(option)}
    >
      {option.title}
    </button>
  );
};

export default SelectOption;
