import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import Box from '@mui/material/Box';
import googlePlayBadge from 'assets/googlePlayBadge.png';
import appStoreBadge from 'assets/appStoreBadge.png';
import { CONTACT_EMAIL } from 'common/constants';
import Grid from 'components/Grid';
import Logo from 'components/Logo';
import Text from 'components/Text';

const Footer = () => (
  <Grid
    container
    sx={{
      backgroundColor: theme => theme.palette.white.main,
      border: '1px solid rgba(0, 0, 0, 0.12)',
      padding: theme => theme.spacing(8),
      marginTop: theme => theme.spacing(6),
    }}
  >
    <Grid container item sm={12} md={4} spacing={3}>
      <Grid item xs={12}>
        <Logo />
      </Grid>

      <Grid container item xs={12}>
        <Box justifyContent="space-between" width={149} display="flex">
          <IconButton aria-label="facebook" sx={{ padding: 0 }}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="twitter" sx={{ padding: 0 }}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="instagram" sx={{ padding: 0 }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Image
            src={appStoreBadge}
            alt="Disponível na App Store"
            width={149}
            height={43}
          />
        </Grid>
        <Grid item xs={12}>
          <Image
            src={googlePlayBadge}
            alt="Disponível no Google Play"
            width={149}
            height={43}
          />
        </Grid>
      </Grid>
    </Grid>

    <Grid container item sm={12} md={4}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Text color="secondary" fontWeight="bold">
              Ajuda &#38; Dúvidas
            </Text>
          </Grid>

          <Grid item xs={12}>
            <Text>Quero ser prestador de serviços</Text>
          </Grid>

          <Grid item xs={12}>
            <Text>Sobre nós</Text>
          </Grid>

          <Grid item xs={12}>
            <Text>Termos e condições</Text>
          </Grid>
        </Grid>
      </Box>
    </Grid>

    <Grid container item sm={12} md={4}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Text color="secondary" fontWeight="bold">
              Contatos
            </Text>
          </Grid>

          <Grid item xs={12}>
            <Text>{CONTACT_EMAIL}</Text>
          </Grid>
        </Grid>
      </Box>
      {/* <Grid item xs={12} sx={theme => }>
        .
      </Grid>

      <Grid item xs={12} sx={theme => }>
        .
      </Grid> */}
    </Grid>
  </Grid>
);

export default Footer;
