import { useState } from 'react';
import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface Props {
  label: string;
  name: string;
  id?: string;
  options: SelectOptions;
  onChange?: (value: string) => any;
}

const RadioGroup = ({ label, name, id, options, onChange }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    setValue(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <FormControl>
      <FormLabel
        id={id || name}
        sx={{ fontWeight: 'bold', color: theme => theme.palette.text.primary }}
      >
        {label}
      </FormLabel>
      <MuiRadioGroup
        aria-labelledby={id || name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map(option => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
