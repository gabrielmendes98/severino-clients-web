/* eslint-disable react/display-name */
import {
  ComponentType,
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { DialogProps } from '@mui/material/Dialog';
import Modal from './index';

interface ModalConfig {
  body: FunctionComponent;
  ModalProps?: Omit<DialogProps, 'open'>;
}

export interface InjectedModalProps {
  showModal: (config: ModalConfig) => void;
}

const DefaultBody = () => <></>;

const withModal =
  <T extends object>(Component: ComponentType<T>) =>
  (props: Omit<T, keyof InjectedModalProps>) => {
    const [open, setOpen] = useState(false);
    const [config, setConfig] = useState<ModalConfig>({
      body: DefaultBody,
    });

    const Body = useMemo(() => config.body, [config.body]);

    const handleClose = useCallback(() => setOpen(false), []);

    const showModal = useCallback((config: ModalConfig) => {
      setConfig(config);
      setOpen(true);
    }, []);

    return (
      <>
        <Component {...(props as T)} showModal={showModal} />

        <Modal {...config.ModalProps} open={open} onClose={handleClose}>
          <Body />
        </Modal>
      </>
    );
  };

export default withModal;
