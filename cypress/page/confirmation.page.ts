class ConfirmationPage {

    private confirmationText: string

    constructor() {
        this.confirmationText = "p.cheque-indent > strong"
    }


    //Page actions
    public checksConfirmation(expectedResult: string, validationType: string) {
        cy.get(this.confirmationText).should(validationType, expectedResult)
    }
}
export {ConfirmationPage}
