class ConfirmationPage {

    private confirmationText: string
    // private assertType: string
    // private assertValue: string

    constructor() {
        this.confirmationText = "p.cheque-indent > strong"
        //this.assertValue = "Your order on My Store is complete."
        //this.assertType = "have.text"
    }

    //Page elements
    public confirmationAnswer(){
        return cy.get(this.confirmationText)
    }

    //Page actions
    public checksConfirmation(expectedResult: string, validationType: string) {
        this.confirmationAnswer().should(validationType, expectedResult)
    }
}
export {ConfirmationPage}
