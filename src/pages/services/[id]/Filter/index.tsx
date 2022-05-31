import Autocomplete from 'components/Autocomplete';
import RadioGroup from 'components/Radio/RadioGroup';
import Stack from 'components/Stack';
import { orderByOptions } from './utils';

const FilterContent = () => (
  <Stack spacing={3}>
    <RadioGroup label="Ordenar por" name="orderBy" options={orderByOptions} />
    <Autocomplete onChange={() => {}} TextFieldProps={{ label: 'Cidade' }} />
  </Stack>
);

export default FilterContent;
