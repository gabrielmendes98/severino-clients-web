import { InjectedModalProps, ModalConfig } from 'components/Modal/withModal';
import RateWorker, { RateWorkerProps } from './index';

interface Args extends Omit<RateWorkerProps, keyof InjectedModalProps> {
  showModal: (config: ModalConfig<RateWorkerProps>) => void;
}

const showRateWorkerModal = ({ showModal, id, name }: Args) =>
  showModal({
    body: RateWorker,
    ModalProps: {
      maxWidth: 'xs',
    },
    BodyProps: {
      id,
      name,
    },
  });

export default showRateWorkerModal;
