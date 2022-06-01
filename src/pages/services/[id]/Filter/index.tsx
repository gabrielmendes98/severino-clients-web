import { useState } from 'react';
import locationsService from 'api/services/locations';
import { parseToSelect } from 'common/utils/parsers';
import Autocomplete from 'components/Autocomplete';
import RadioGroup from 'components/Radio/RadioGroup';
import Stack from 'components/Stack';
import Text from 'components/Text';
import { orderByOptions } from './utils';

export type FilterValues = {
  orderBy: string;
};

interface Props {
  onChange: OnFieldChange;
  filter: FilterValues;
}

const FilterContent = ({ onChange, filter }: Props) => (
  <Stack spacing={3}>
    <RadioGroup
      label="Ordenar por"
      name="orderBy"
      options={orderByOptions}
      value={filter.orderBy}
      onChange={onChange}
      showNone
    />
  </Stack>
);

export default FilterContent;
