import { GoogleLoginProps } from 'react-google-login';
import { GoogleLogin } from './styles';

const GoogleLoginButton = (
  props: Omit<GoogleLoginProps, 'clientId' | 'theme'>,
) => (
  <GoogleLogin
    clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
    buttonText="Entrar com Google"
    cookiePolicy={'single_host_origin'}
    {...props}
  />
);

export default GoogleLoginButton;
