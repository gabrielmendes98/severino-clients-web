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
  onChange?: OnFieldChange;
  value?: any;
  showNone?: boolean;
}

const RadioGroup = ({
  label,
  name,
  id,
  options,
  onChange,
  showNone,
  value = '',
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = (event.target as HTMLInputElement).value;
    if (onChange) {
      onChange(event, selectedValue);
    }
  };

  return (
    <FormControl>
      <FormLabel id={id || name}>{label}</FormLabel>
      <MuiRadioGroup
        aria-labelledby={id || name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {showNone && (
          <FormControlLabel
            key="none"
            value=""
            control={<Radio />}
            label="Nenhum"
          />
        )}
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
