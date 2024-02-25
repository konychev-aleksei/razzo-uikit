import styles from "./Select.module.scss";
import { X } from "react-bootstrap-icons";
import { useSelectContext } from "./SelectContext";

const SelectClear = () => {
  const { handleInputClear, showClearButton } = useSelectContext();

  if (!showClearButton) {
    return null;
  }

  return (
    <span
      className={styles.select__block__controls__clear}
      onClick={handleInputClear}
    >
      <X />
    </span>
  );
};

export default SelectClear;
