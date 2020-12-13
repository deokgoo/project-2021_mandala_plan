import useMandalaWeb from './use-mandala-web';
import { renderHook } from '@testing-library/react-hooks';

const mandalaState = {
  dreamCore: {
    core: {title: 'testCore', description: 'test...'},
    side: [
      {title: 'testSide1', description: 'testSide1 test...'},
      {title: 'testSide2', description: 'testSide2 test...'},
      {title: 'testSide3', description: 'testSide3 test...'},
      {title: 'testSide4', description: 'testSide4 test...'},
      {title: 'testSide5', description: 'testSide5 test...'},
      {title: 'testSide6', description: 'testSide6 test...'},
      {title: 'testSide7', description: 'testSide7 test...'},
      {title: 'testSide8', description: 'testSide8 test...'},
    ]
  },
}

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => mandalaState,
}));

describe('useMandalaWeb ut', () => {
  it('mandalaData check from redux', async () => {
    const { result } = await renderHook(() => useMandalaWeb());
    expect(result.current.mandalaData).toEqual(mandalaState);
  });
});