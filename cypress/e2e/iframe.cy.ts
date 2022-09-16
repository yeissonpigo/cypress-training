import {IFramePage} from "../page";

describe("Check the iframe", () => {
  let iFramePage: IFramePage;

  beforeEach(() => {
    iFramePage = new IFramePage;
    iFramePage.visit();
  });

  it("Goes to page and checks iFrame exists", () => {
    iFramePage.checkTitleInIFrame("HTML Tutorial");
  });

  it("Goes to page, using iframe goes to css page, and checks it is updated", () => {
    iFramePage.goToCssPageInFrame();

    iFramePage.checkTitleInIFrame("CSS Tutorial");
  });
});
