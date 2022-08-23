class ConfirmationPage {

    private confirmationText: string
    private assertType: string
    private assertValue: string

    constructor() {
        this.confirmationText = ".cheque-indent > strong"
        this.assertValue = "Your order on My Store is complete."
        this.assertType = "have.text"
    }

    public checksConfirmation() {
        cy.get(this.confirmationText).should(this.assertType, this.assertValue)
    }
}
export {ConfirmationPage}
