class AddressStepPage {

    private checkoutButton: string

    constructor() {
        this.checkoutButton = "button[name='processAddress']"
    }

    public clickOnCheckout(){
        cy.get(this.checkoutButton).click()
    }
}

export {AddressStepPage}
