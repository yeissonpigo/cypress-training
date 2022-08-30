class PaymentStepPage {
    
    private paymentMethod: string
    private confirmOrderButton: string

    constructor() {
        this.paymentMethod = "a.bankwire"
        this.confirmOrderButton = "#cart_navigation > button.button.btn[type='submit']"
    }

    public clickOnSelectPaymentMethod() {
        cy.get(this.paymentMethod).click()
    }

    public clickOnConfirmOrder(){
        cy.get(this.confirmOrderButton).click()
    }
}
export {PaymentStepPage}
