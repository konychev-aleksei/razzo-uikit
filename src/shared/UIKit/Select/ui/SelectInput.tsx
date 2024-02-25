import styles from "./Select.module.scss";
import { useSelectContext } from "./SelectContext";

const SelectInput = () => {
  const {
    inputRef,
    value,
    placeholder,
    handleInputFocus,
    handleInputChange,
  } = useSelectContext();

  return (
    <input
      ref={inputRef}
      type="text"
      value={value.title}
      placeholder={placeholder}
      onFocus={handleInputFocus}
      onChange={handleInputChange}
      className={styles.select__block__input__field}
    />
  );
};

export default SelectInput;
