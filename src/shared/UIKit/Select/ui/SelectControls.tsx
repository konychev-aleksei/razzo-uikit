import { ReactNode } from "react";
import styles from "./Select.module.scss";

type SelectControlsProps = {
  children: ReactNode;
};

const SelectControls = ({ children }: SelectControlsProps) => {
  return <div className={styles.select__block__controls}>{children}</div>;
};

export default SelectControls;
