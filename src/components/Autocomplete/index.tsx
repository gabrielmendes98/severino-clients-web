import { SyntheticEvent, useEffect, useMemo } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { InputProps } from '@mui/material/Input';
import MuiAutocomplete from '@mui/material/Autocomplete';
import debounce from 'lodash.debounce';

interface Props {
  id?: string;
  placeholder?: string;
  maxWidth?: number;
  onChange: (event: SyntheticEvent<Element, Event>, value: string) => any;
  options?: SelectOptions;
  loading?: boolean;
  onOptionSelect?: (
    event: SyntheticEvent<Element, Event>,
    option: SelectOption,
  ) => any;
  InputProps?: InputProps;
  TextFieldProps?: TextFieldProps;
  name?: string;
}

const Autocomplete = ({
  id,
  placeholder,
  maxWidth,
  onChange,
  onOptionSelect,
  options = [],
  InputProps,
  TextFieldProps,
  name,
}: Props) => {
  const onType = useMemo(
    () => debounce((e, value) => onChange(e, value), 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onOptionSelectHandler = (
    event: SyntheticEvent<Element, Event>,
    option: SelectOption | null | string,
  ) => {
    if (onOptionSelect && option) {
      (event.target as any).name = name;
      onOptionSelect(event, option as SelectOption);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => onType.cancel(), []);

  return (
    <MuiAutocomplete
      id={id || name}
      onInputChange={onType}
      freeSolo
      options={options}
      onChange={onOptionSelectHandler}
      fullWidth
      sx={{
        maxWidth,
      }}
      renderInput={params => (
        <TextField
          {...params}
          size="small"
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            ...InputProps,
          }}
          name={name}
          {...TextFieldProps}
        />
      )}
    />
  );
};

export default Autocomplete;
