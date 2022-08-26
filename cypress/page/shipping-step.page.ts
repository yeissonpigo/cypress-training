class ShippingStepPage {

    private checkbox: string
    private checkout: string

    constructor() {
        this.checkbox = "#cgv"
        this.checkout = "#form button[name='processCarrier']"
    }

    public clickCheckbox() {
        cy.get(this.checkbox).click()
    }

    public checkoutFun() {
        cy.get(this.checkout).click()
    }
}
export {ShippingStepPage}
