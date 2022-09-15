import { PracticeFormPage } from "../page/index";

describe("User goes to website, fills the form and submits it", () => {
  let practiceFormPage: PracticeFormPage;

  before(() => {
    practiceFormPage = new PracticeFormPage();
  });
  it("checks the right results", () => {
    // Arrange
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      dateOfBirth: "27 Jul 2016",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
      state: "Uttar Pradesh",
      city: "Agra",
    };
    const expectedText = "Thanks for submitting the form";
    practiceFormPage.visitFormContentPage();

    // Act
    practiceFormPage.fillForm(personalInformation);

    // Assert
    practiceFormPage.verifyModalHeaderText(expectedText);
  });
});
