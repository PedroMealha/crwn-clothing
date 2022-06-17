import { FromInputLabel, Input, Group } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => (
  <Group>
    <Input {...otherProps} />
    {label && (
      <FromInputLabel shrink={otherProps.value.length}>{label}</FromInputLabel>
    )}
  </Group>
);

export default FormInput;
