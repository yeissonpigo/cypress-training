import { MenuContentPage, DressesListPage } from "../page/index";

describe("the user navigates to the dresses page should", () => {
    let menuContentPage: MenuContentPage;
    let dressesListPage: DressesListPage;

    before(() => {
        menuContentPage = new MenuContentPage();
        dressesListPage = new DressesListPage();
    });

    it("show the available dresses", () => {
        //Arrange
        const expectedDresses = ["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"];
        menuContentPage.visitMenuContentPage();

        //Act
        menuContentPage.goToDressMenu();

        //Assert
        dressesListPage.validateItemsNumber(expectedDresses.length);
        dressesListPage.validateItemsName(expectedDresses);
    });
});
