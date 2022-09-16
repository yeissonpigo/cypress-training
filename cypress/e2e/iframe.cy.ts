import {IFramePage} from "../page";

describe("Check the iframe", () => {
  let iFramePage: IFramePage;

  before(() => {
    iFramePage = new IFramePage;
  });

  it("Goes to page and checks iFrame exists", () => {
    iFramePage.visit();

    iFramePage.getFrameTitle("HTML Tutorial");

    iFramePage.goToCssPageInFrame("CSS Tutorial");
  });
});
