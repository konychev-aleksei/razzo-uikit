import { ReactNode } from "react";
import styles from "./Select.module.scss";

type SelectLabelProps = {
  children: ReactNode;
};

const SelectLabel = ({ children }: SelectLabelProps) => {
  return <p className={styles.select__block__input__label}>{children}</p>;
};

export default SelectLabel;
