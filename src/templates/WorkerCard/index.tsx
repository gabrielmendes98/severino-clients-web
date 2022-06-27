import { MouseEvent, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from 'next/router';
import workersService from 'api/services/workers';
import Box from 'components/Box';
import Text from 'components/Text';
import IconButton from 'components/IconButton';
import { Container, Avatar, TextLimited } from './styles';

export interface WorkerCardProps {
  id: string;
  avatarUrl: string | null;
  rating: number | null;
  phoneNumber: string | null;
  name: string;
  services?: string;
  location: string;
  isFavorite: boolean;
  whatsAppLink: string | null;
  hasWhatsapp: boolean;
}

const WorkerCard = ({
  id,
  avatarUrl,
  rating,
  phoneNumber,
  name,
  services,
  location,
  isFavorite,
  whatsAppLink,
  hasWhatsapp,
}: WorkerCardProps) => {
  const router = useRouter();
  const [localIsFavorite, setLocalIsFavorite] = useState(isFavorite);

  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setLocalIsFavorite(init => !init);
    workersService.favorite(id).catch(() => {
      setLocalIsFavorite(init => !init);
    });
  };

  const handleCardClick = () => {
    router.push({
      pathname: `/profile/${id}`,
    });
  };

  const splitName = name.split(' ');
  const textAvatar = (splitName[0][0] + splitName[1][0]).toUpperCase();

  return (
    <Container onClick={handleCardClick}>
      <Avatar src={avatarUrl!} alt="Foto do profissional">
        {textAvatar}
      </Avatar>

      <Box display="flex" justifyContent="space-between" marginBottom={1}>
        <Box display="flex">
          <StarIcon color="primary" />
          <Text color="primary" fontWeight="bold" marginLeft={1}>
            {rating === null ? 'Novo' : rating}
          </Text>
        </Box>

        {phoneNumber && <Text color="text.secondary">{phoneNumber}</Text>}
      </Box>

      <Text marginBottom={1}>{name}</Text>

      <TextLimited color="text.secondary" marginBottom={3}>
        {services}
      </TextLimited>

      <Box display="flex" marginBottom={2}>
        <LocationOnIcon color="primary" />
        <Text>{location}</Text>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin={-2}
        marginTop="auto"
      >
        <IconButton aria-label="favoritar" onClick={handleFavoriteClick}>
          {localIsFavorite ? (
            <FavoriteIcon color="primary" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>

        {hasWhatsapp && (
          <>
            <Text>|</Text>

            <a
              href={whatsAppLink!}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
            >
              <IconButton aria-label="whatsapp">
                <WhatsAppIcon />
              </IconButton>
            </a>
          </>
        )}
      </Box>
    </Container>
  );
};

export default WorkerCard;
