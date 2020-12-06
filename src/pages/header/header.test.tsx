import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import Header from './header';

let container: null | HTMLElement = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if(!container) return;
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('test header', () => {
  it('header title 확인', () => {
    act(() => {
      render(<Header />, container);
    });
    expect(container?.textContent).toEqual(expect.stringContaining('plan your dream'));
  });
})