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

export interface InjectedModalProps {
  showModal: (config: ModalConfig) => void;
  closeModal: () => void;
}
export interface ModalConfig<R = any> {
  body: FunctionComponent<R & InjectedModalProps>;
  ModalProps?: Omit<DialogProps, 'open'>;
  BodyProps?: Omit<R, keyof InjectedModalProps>;
}

const DefaultBody = () => <></>;

const withModal =
  <T extends object>(Component: ComponentType<T>) =>
  (props: Omit<T, keyof InjectedModalProps>) => {
    const [open, setOpen] = useState(false);
    const [config, setConfig] = useState<ModalConfig>({
      body: DefaultBody,
      BodyProps: {},
    });

    const Body = useMemo(() => config.body, [config.body]);

    const closeModal = useCallback(() => setOpen(false), []);

    const showModal = useCallback((config: ModalConfig) => {
      setConfig(config);
      setOpen(true);
    }, []);

    return (
      <>
        <Component
          {...(props as T)}
          showModal={showModal}
          closeModal={closeModal}
        />

        <Modal {...config.ModalProps} open={open} onClose={closeModal}>
          <Body
            {...config.BodyProps}
            showModal={showModal}
            closeModal={closeModal}
          />
        </Modal>
      </>
    );
  };

export default withModal;
