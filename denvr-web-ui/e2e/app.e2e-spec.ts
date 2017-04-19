import { DenvrWebUiPage } from './app.po';

describe('denvr-web-ui App', () => {
  let page: DenvrWebUiPage;

  beforeEach(() => {
    page = new DenvrWebUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
