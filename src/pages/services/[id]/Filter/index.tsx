import RadioGroup from 'components/Radio/RadioGroup';
import { orderByOptions } from './utils';

const FilterContent = () => (
  <>
    <RadioGroup label="Ordenar por" name="orderBy" options={orderByOptions} />
  </>
);

export default FilterContent;
