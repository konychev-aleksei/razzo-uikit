import { SelectSingle } from "./SelectSingle";

type Props = {
  multiple?: boolean;
} & any;

export const Select = ({ multiple = false, ...rest }: Props) => {
  if (multiple) {
    return null;
  }

  return <SelectSingle {...rest} />;
};
