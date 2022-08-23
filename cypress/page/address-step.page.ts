class AddressStepPage {

    private checkoutButton: string

    constructor() {
        this.checkoutButton = "button[name='processAddress']"
    }

    public checkout() {
        cy.get(this.checkoutButton).click()
    }
}

export {AddressStepPage}
