/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { ComponentType, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { selectUserIsSigned } from 'common/slices/user';
import { useSelector } from 'common/store/hooks';
import Loader from 'components/Loader';
import Box from 'components/Box';

const withAuthentication =
  <T extends object>(Component: ComponentType<T>) =>
  (props: T) => {
    const router = useRouter();
    const isSigned = useSelector(selectUserIsSigned);
    const [clientIsSigned, setClientIsSigned] = useState(false);

    useEffect(() => {
      setClientIsSigned(isSigned);
      if (!isSigned) {
        router.push('/login');
        toast.error('Você precisa estar autenticado para acessar essa rota');
      }
    }, [isSigned, router]);

    if (!clientIsSigned) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Loader />
        </Box>
      );
    }

    return <Component {...(props as T)} />;
  };

export default withAuthentication;
