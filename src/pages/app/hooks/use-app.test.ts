import { unmountComponentAtNode } from 'react-dom';
import { renderHook } from '@testing-library/react-hooks';
import useApp from './use-app';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  })
}));

let container: null | HTMLElement = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  if(!container) return;
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

describe('hook test', () => {
  it('userState & useEffect test', async () => {
    const { result } = await renderHook(() => useApp());
    expect(result.current.user).toEqual({
      name: 'deok',
      gender: 'man',
      age: 28,
    })
  });
  it('goPage test', async () => {
    const { result } = await renderHook(() => useApp());
    await result.current.goPage();
    expect(mockHistoryPush).toBeCalledWith({
      pathname: '/test',
    });
  });
})
