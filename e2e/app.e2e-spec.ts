import { XCloudConfigComplianceServicePage } from './app.po';

describe('x-cloud-config-compliance-service App', () => {
  let page: XCloudConfigComplianceServicePage;

  beforeEach(() => {
    page = new XCloudConfigComplianceServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
