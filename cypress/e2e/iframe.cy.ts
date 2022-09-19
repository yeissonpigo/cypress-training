import {IFramePage} from "../page";

describe("Check the iframe", () => {
  let iFramePage: IFramePage;

  beforeEach(() => {
    iFramePage = new IFramePage;
    iFramePage.visit();
  });

  it("Goes to page and checks iFrame exists", () => {
    iFramePage.getFrameTitle().should("have.text", "HTML Tutorial");
  });

  it("Goes to page, using iframe goes to css page, and checks it is updated", () => {
    iFramePage.goToCssPageInFrame();

    iFramePage.getFrameTitle().should("have.text", "CSS Tutorial");
  });
});
