import { useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce';

interface Props {
  placeholder?: string;
  maxWidth?: number;
  onChange: (value: string) => any;
  options?: SelectOptions;
}

const SearchInput = ({
  placeholder,
  maxWidth,
  onChange,
  options = [],
}: Props) => {
  const onValueChange = useMemo(
    () => debounce((e, value) => onChange(value), 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Autocomplete
      id="search-input"
      onInputChange={onValueChange}
      freeSolo
      options={options.map(option => option.label)}
      fullWidth
      sx={{
        maxWidth,
      }}
      renderInput={params => (
        <TextField
          {...params}
          sx={{
            backgroundColor: theme => theme.palette.white.main,
          }}
          size="small"
          placeholder={placeholder}
          color="white"
          focused
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchInput;
