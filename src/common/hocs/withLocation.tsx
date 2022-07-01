/* eslint-disable react/display-name */
import { ComponentType, useEffect, useState } from 'react';
import { useSelector } from 'common/store/hooks';
import { selectHasLocation } from 'common/slices/location';
import { isOnServer } from 'common/utils/ssr';
import Location from 'templates/Location';
import Modal from 'components/Modal';

const withLocation =
  <T extends object>(Component: ComponentType<T>) =>
  (props: T) => {
    const hasLocation = useSelector(selectHasLocation);
    const [clientHasLocation, setClientHasLocation] = useState(true);
    const [open, setOpen] = useState(true);

    useEffect(() => {
      setClientHasLocation(hasLocation);
    }, [hasLocation]);

    if (!clientHasLocation && !isOnServer()) {
      return (
        <Modal open={open}>
          <Location closeModal={() => setOpen(false)} />
        </Modal>
      );
    }

    return <Component {...(props as T)} />;
  };

export default withLocation;
