class AddressStepPage {

    private checkoutButton: string

    constructor() {
        this.checkoutButton = "button[name='processAddress']"
    }

    //Page elements
    public checkout() {
        return cy.get(this.checkoutButton)
    }

    //Page actions
    public clickOnCheckout(){
        this.checkout().click()
    }
}

export {AddressStepPage}
