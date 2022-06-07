import Image from 'next/image';
import MyLocation from '@mui/icons-material/MyLocation';
import locationDoodle from 'assets/locationDoodle.svg';
import Stack from 'components/Stack';
import Text from 'components/Text';
import SearchInput from 'components/SearchInput';
import Button from 'components/Button';

const Location = () => (
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
      onChange={() => {}}
      onOptionSelect={() => {}}
      placeholder="Buscar cidade"
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
  </Stack>
);

export default Location;
