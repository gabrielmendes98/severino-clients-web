import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { MouseEvent, useState } from 'react';
import workersService from 'api/services/workers';
import Avatar from 'components/Avatar';
import Box from 'components/Box';
import Button from 'components/Button';
import Grid from 'components/Grid';
import withModal, { InjectedModalProps } from 'components/Modal/withModal';
import Section from '../../Section';
import showRateWorkerModal from './RateWorker/showModal';

interface Props extends InjectedModalProps {
  id: string;
  name: string;
  avatarUrl: string | null;
  isFavorite: boolean;
  whatsAppLink: string | null;
  hasWhatsapp: boolean;
}

const PhotoAndActionsSection = ({
  id,
  name,
  avatarUrl,
  isFavorite,
  whatsAppLink,
  hasWhatsapp,
  showModal,
}: Props) => {
  const [localIsFavorite, setLocalIsFavorite] = useState(isFavorite);
  const splitName = name.split(' ');
  const textAvatar = (splitName[0][0] + splitName[1][0]).toUpperCase();

  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setLocalIsFavorite(init => !init);
    workersService.favorite(id).catch(() => {
      setLocalIsFavorite(init => !init);
    });
  };

  return (
    <Section>
      <Grid container>
        <Grid item xs={6}>
          <Avatar
            sx={{
              height: '150px',
              width: '150px',
              fontSize: '60px',
              backgroundColor: theme => theme.palette.primary.main,
            }}
            src={avatarUrl!}
            alt="Foto do profissional"
          >
            {textAvatar}
          </Avatar>
        </Grid>

        <Grid container item xs={6} justifyContent="flex-end">
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            {hasWhatsapp && (
              <a
                href={whatsAppLink!}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{ textDecoration: 'none' }}
              >
                <Button startIcon={<WhatsAppIcon />}>WhatsApp</Button>
              </a>
            )}

            <Button
              startIcon={
                localIsFavorite ? (
                  <FavoriteIcon color="primary" />
                ) : (
                  <FavoriteBorderIcon />
                )
              }
              onClick={handleFavoriteClick}
            >
              {localIsFavorite ? 'Favorito' : 'Favoritar'}
            </Button>

            <Button startIcon={<VisibilityIcon />}>Ver avaliações</Button>

            <Button
              startIcon={<StarOutlineIcon />}
              onClick={() => showRateWorkerModal({ id, name, showModal })}
            >
              Avaliar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default withModal(PhotoAndActionsSection);
