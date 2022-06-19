import { useField } from 'formik';
import InputBase, { InputBaseProps } from './Base';

type Props = InputBaseProps & {
  name: string;
};

const Input = ({ name, children, ...props }: Props) => {
  const [field, meta] = useField(name);
  const { error, touched, ...restMeta } = meta;

  const hasError = Boolean(touched && error);

  return (
    <InputBase
      error={hasError}
      helperText={hasError && error}
      {...restMeta}
      {...field}
      {...props}
    >
      {children}
    </InputBase>
  );
};

export default Input;
