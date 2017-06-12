import { AngularTestForJenkinsPage } from './app.po';

describe('angular-test-for-jenkins App', () => {
  let page: AngularTestForJenkinsPage;

  beforeEach(() => {
    page = new AngularTestForJenkinsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
