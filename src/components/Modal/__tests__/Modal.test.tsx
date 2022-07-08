import { render } from 'test-utils';
import Modal from '../index';

it('should match snapshot when opened', () => {
  const { baseElement } = render(
    <Modal open>
      <div>content</div>
    </Modal>,
  );
  expect(baseElement).toMatchSnapshot();
});

it('should match snapshot when closed', () => {
  const { baseElement } = render(
    <Modal open={false}>
      <div>content</div>
    </Modal>,
  );
  expect(baseElement).toMatchSnapshot();
});
