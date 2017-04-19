import { SearchAndFilterPage } from './app.po';

describe('search-and-filter App', () => {
  let page: SearchAndFilterPage;

  beforeEach(() => {
    page = new SearchAndFilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
