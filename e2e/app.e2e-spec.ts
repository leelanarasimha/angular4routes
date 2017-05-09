import { BasicroutesPage } from './app.po';

describe('basicroutes App', () => {
  let page: BasicroutesPage;

  beforeEach(() => {
    page = new BasicroutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
