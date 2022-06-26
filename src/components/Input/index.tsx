import { useField } from 'formik';
import InputBase, { InputBaseProps } from './Base';

export type InputProps = InputBaseProps & {
  name: string;
};

const Input = ({ name, children, ...props }: InputProps) => {
  const [field, meta] = useField(name);
  const { error, touched } = meta;

  const hasError = Boolean(touched && error);

  return (
    <InputBase
      error={hasError}
      helperText={hasError && error}
      {...field}
      {...props}
    >
      {children}
    </InputBase>
  );
};

export default Input;
