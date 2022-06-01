import { useState } from 'react';
import locationsService from 'api/services/locations';
import { parseToSelect } from 'common/utils/parsers';
import Autocomplete from 'components/Autocomplete';
import RadioGroup from 'components/Radio/RadioGroup';
import Stack from 'components/Stack';
import { orderByOptions } from './utils';

export type FilterValues = {
  orderBy: string;
  cityId: string;
};

interface Props {
  onChange: OnFieldChange;
  filter: FilterValues;
}

const FilterContent = ({ onChange, filter }: Props) => {
  const [cities, setCities] = useState<SelectOptions>([]);
  const onCityChange = (e: any, value: string) => {
    locationsService
      .search(value)
      .then(response => parseToSelect(response, 'name', 'id'))
      .then(setCities);
  };

  return (
    <Stack spacing={3}>
      <RadioGroup
        label="Ordenar por"
        name="orderBy"
        options={orderByOptions}
        value={filter.orderBy}
        onChange={onChange}
        showNone
      />
      <Autocomplete
        onChange={onCityChange}
        name="cityId"
        TextFieldProps={{ label: 'Cidade' }}
        options={cities}
        onOptionSelect={(e, option) => onChange(e, option.value)}
      />
    </Stack>
  );
};

export default FilterContent;
