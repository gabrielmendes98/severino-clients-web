import Image from 'next/image';
import MyLocation from '@mui/icons-material/MyLocation';
import { useState } from 'react';
import locationsService from 'api/services/locations';
import locationDoodle from 'assets/locationDoodle.svg';
import { parseLocationsToSelect, parseToSelect } from 'common/utils/parsers';
import { useDispatch } from 'common/store/hooks';
import { add } from 'common/slices/location';
import Stack from 'components/Stack';
import Text from 'components/Text';
import SearchInput from 'components/SearchInput';
import Button from 'components/Button';
import Box from 'components/Box';
import { InjectedModalProps } from 'components/Modal/withModal';

const Location = ({ closeModal }: InjectedModalProps) => {
  const dispatch = useDispatch();
  const [cities, setCities] = useState<SelectOptions>([]);
  const [selectedCity, setSelectedCity] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const handleSearchChange = (value: string) => {
    if (!value) {
      setSelectedCity(null);
      return;
    }
    locationsService
      .search(value)
      .then(response => parseLocationsToSelect(response))
      .then(setCities);
  };

  const handleOptionSelect = (option: SelectOption) =>
    setSelectedCity({ id: option.value, name: option.label });

  const handleConfirmLocation = () => {
    dispatch(add(selectedCity!));
    closeModal();
  };

  return (
    <Stack spacing={3}>
      <Image
        src={locationDoodle}
        alt="Location Doodle"
        width={150}
        height={150}
      />

      <Text variant="h6" textAlign="center">
        Em qual cidade você quer buscar profissionais?
      </Text>

      <SearchInput
        onChange={handleSearchChange}
        onOptionSelect={handleOptionSelect}
        placeholder="Buscar cidade"
        options={cities}
      />

      <Button
        startIcon={<MyLocation />}
        sx={{
          justifyContent: 'flex-start',
          paddingLeft: theme => theme.spacing(2),
        }}
        size="large"
      >
        Usar minha localização
      </Button>

      {Boolean(selectedCity) && (
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" onClick={handleConfirmLocation}>
            Confirmar
          </Button>
        </Box>
      )}
    </Stack>
  );
};

export default Location;
