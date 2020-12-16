import { unmountComponentAtNode } from 'react-dom';
import { renderHook } from '@testing-library/react-hooks';
import useMain from './use-main';
import { act } from 'react-dom/test-utils';
import { viewTypeEnum } from './type';

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
  it('windowDimensions test', async () => {
    const { result, waitForNextUpdate } = await renderHook(() => useMain());

    expect(result.current.windowViewType).toEqual(viewTypeEnum.web);

    window = Object.assign(window, { innerWidth: 500, innerHeight: 500 });
    act(() => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))},
        100);
    });

    await waitForNextUpdate();

    expect(result.current.windowViewType).toEqual(viewTypeEnum.mobile);
  });
})
