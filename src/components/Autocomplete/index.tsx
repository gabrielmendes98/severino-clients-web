import { SyntheticEvent, useEffect, useMemo } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { InputProps } from '@mui/material/Input';
import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material/Autocomplete';
import debounce from 'lodash.debounce';

type Props = {
  id?: string;
  placeholder?: string;
  maxWidth?: number;
  onChange: (event: SyntheticEvent<Element, Event>, value: string) => any;
  options: SelectOptions;
  loading?: boolean;
  onOptionSelect?: (
    event: SyntheticEvent<Element, Event>,
    option: SelectOption,
  ) => any;
  InputProps?: InputProps;
  TextFieldProps?: TextFieldProps;
  name?: string;
  disableClearable?: boolean;
  freeSolo?: boolean;
};

interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends Omit<
      MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
      keyof Props | 'renderInput'
    >,
    Props {}

const Autocomplete = <
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
>({
  id,
  placeholder,
  maxWidth,
  onChange,
  onOptionSelect,
  options = [],
  InputProps,
  TextFieldProps,
  name,
  disableClearable = false,
  freeSolo = true,
  ...props
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
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
      {...(props as any)}
      id={id || name}
      onInputChange={onType}
      freeSolo={freeSolo}
      options={options}
      onChange={onOptionSelectHandler}
      fullWidth
      sx={{
        maxWidth,
      }}
      disableClearable={disableClearable}
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
