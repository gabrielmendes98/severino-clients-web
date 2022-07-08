import { render, screen, userEvent, waitFor } from 'test-utils';
import withModal, { InjectedModalProps } from '../withModal';

it('should be able to show modal in wrapped component', async () => {
  const Component = ({ showModal }: InjectedModalProps) => (
    <button
      onClick={() =>
        showModal({
          body: () => <div>modal body</div>,
        })
      }
    >
      show modal
    </button>
  );
  const Wrapped = withModal(Component);

  render(<Wrapped />);

  userEvent.click(screen.getByRole('button', { name: 'show modal' }));

  await waitFor(() => {
    expect(screen.getByText('modal body')).toBeInTheDocument();
  });
});
