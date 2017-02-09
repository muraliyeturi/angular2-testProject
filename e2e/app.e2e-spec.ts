import { MyProjectPage } from './app.po';

describe('my-project App', function() {
  let page: MyProjectPage;

  beforeEach(() => {
    page = new MyProjectPage();
  });

  it('should display h1 with product title', () => {
    page.navigateTo();
    expect(page.getProductTitle()).toEqual('Ninja™ Professional Blender with Single Serve Blending Cups');
  });
});
