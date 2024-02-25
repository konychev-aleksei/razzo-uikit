import { createContext, useContext } from "react";

const SelectContext = createContext<any | null>(null);

export function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error(
      "Select.* component should be rendered as a child of Select component"
    );
  }

  return context;
}

export default SelectContext;
