import { MybeerappPage } from './app.po';

describe('mybeerapp App', () => {
  let page: MybeerappPage;

  beforeEach(() => {
    page = new MybeerappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
