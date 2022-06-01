import { Fragment, SyntheticEvent, useEffect, useMemo } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { InputProps } from '@mui/material/Input';
import MuiAutocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce';
import Loader from 'components/Loader';

interface Props {
  id?: string;
  placeholder?: string;
  maxWidth?: number;
  onChange: (value: string) => any;
  options?: SelectOptions;
  loading?: boolean;
  onOptionSelect?: (option: SelectOption) => any;
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
  const onValueChange = useMemo(
    () => debounce((e, value) => onChange(value), 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onOptionSelectHandler = (
    event: SyntheticEvent<Element, Event>,
    option: SelectOption | null | string,
  ) => {
    if (onOptionSelect && option) {
      onOptionSelect(option as SelectOption);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => onValueChange.cancel(), []);

  return (
    <MuiAutocomplete
      id={id}
      onInputChange={onValueChange}
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
