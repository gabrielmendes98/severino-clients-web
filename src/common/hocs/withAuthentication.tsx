/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { ComponentType, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { selectUserIsSigned } from 'common/slices/user';
import { useSelector } from 'common/store/hooks';

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
      return <div>loading...</div>;
    }

    return <Component {...(props as T)} />;
  };

export default withAuthentication;
