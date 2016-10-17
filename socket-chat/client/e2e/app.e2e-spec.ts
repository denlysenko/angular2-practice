import { SocketchatPage } from './app.po';

describe('socketchat App', function() {
  let page: SocketchatPage;

  beforeEach(() => {
    page = new SocketchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
