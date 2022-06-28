import { ModalConfig } from 'components/Modal/withModal';
import RateWorker, { RateWorkerProps } from './index';

interface Args extends RateWorkerProps {
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
