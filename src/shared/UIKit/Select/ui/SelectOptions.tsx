import { ReactNode, useEffect, useRef } from "react";
import styles from "./Select.module.scss";
import { useSelectContext } from "./SelectContext";

type SelectOptionsProps = {
  children: ReactNode;
};

const SelectOptions = ({ children }: SelectOptionsProps) => {
  const { maxOptionsShown } = useSelectContext();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewportOffset = ref?.current?.getBoundingClientRect();

    if (viewportOffset) {
      console.log(viewportOffset.top);
    }
  }, []);

  return (
    <div ref={ref} className={styles.select__options}>
      {children}
    </div>
  );
};

export default SelectOptions;
