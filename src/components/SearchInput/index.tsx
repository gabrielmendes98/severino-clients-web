import { Fragment, SyntheticEvent, useEffect, useMemo } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce';
import Loader from 'components/Loader';
import Autocomplete from 'components/Autocomplete';

interface Props {
  id?: string;
  placeholder?: string;
  maxWidth?: number;
  onChange: (value: string) => any;
  options?: SelectOptions;
  loading?: boolean;
  onOptionSelect: (option: SelectOption) => any;
  TextFieldProps?: TextFieldProps;
}

const SearchInput = ({
  id,
  placeholder,
  maxWidth,
  onChange,
  onOptionSelect,
  options = [],
  loading,
  TextFieldProps,
}: Props) => (
  <Autocomplete
    id={id}
    placeholder={placeholder}
    maxWidth={maxWidth}
    onChange={(e, value) => onChange(value)}
    onOptionSelect={(e, option) => onOptionSelect(option)}
    options={options}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          {loading ? <Loader color="primary" size={20} /> : <SearchIcon />}
        </InputAdornment>
      ),
    }}
    TextFieldProps={TextFieldProps}
  />
);

export default SearchInput;
