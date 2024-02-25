import styles from "./Select.module.scss";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import { useSelectContext } from "./SelectContext";

const SelectCaret = () => {
  const { handleInputFocus, showOptions } = useSelectContext();
  return (
    <span
      onClick={handleInputFocus}
      className={styles.select__block__controls__toggler}
    >
      {showOptions ? <CaretUpFill /> : <CaretDownFill />}
    </span>
  );
};

export default SelectCaret;
