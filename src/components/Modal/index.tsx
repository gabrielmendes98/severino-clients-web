import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const Modal = ({ open, onClose, children, ...props }: DialogProps) => (
  <Dialog {...props} open={open} onClose={onClose}>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);

export default Modal;
