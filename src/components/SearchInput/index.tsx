import { Fragment, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce';
import Loader from 'components/Loader';

interface Props {
  placeholder?: string;
  maxWidth?: number;
  onChange: (value: string) => any;
  options?: SelectOptions;
  loading?: boolean;
}

const SearchInput = ({
  placeholder,
  maxWidth,
  onChange,
  options = [],
  loading,
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
            backgroundColor: theme => theme.palette.bw.main,
          }}
          size="small"
          placeholder={placeholder}
          color="bw"
          focused
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {loading ? (
                  <Loader color="primary" size={20} />
                ) : (
                  <SearchIcon />
                )}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchInput;
