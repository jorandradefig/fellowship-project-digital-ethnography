import { DigEthPage } from './app.po';

describe('dig-eth App', () => {
  let page: DigEthPage;

  beforeEach(() => {
    page = new DigEthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
