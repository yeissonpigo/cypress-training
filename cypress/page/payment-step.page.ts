class PaymentStepPage {
    
    private paymentMethod: string
    private confirmOrderButton: string

    constructor() {
        this.paymentMethod = "a.bankwire"
        this.confirmOrderButton = "#cart_navigation > button.button.btn[type='submit']"
    }


    //Page elements
    public selectPaymentMethod() {
        return cy.get(this.paymentMethod)
    }

    public confirmOrder() {
        return cy.get(this.confirmOrderButton)
    }

    //Page actions
    public clickOnSelectPaymentMethod() {
        this.selectPaymentMethod().click()
    }

    public clickOnConfirmOrder(){
        this.confirmOrder().click()
    }
}
export {PaymentStepPage}
