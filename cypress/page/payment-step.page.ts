class PaymentStepPage {
    
    private paymentMethod: string
    private confirmOrder: string

    constructor() {
        this.paymentMethod = "a.bankwire"
        this.confirmOrder = "#center_column > form > p > button[type='submit']"
    }

    public selectPaymentMethod() {
        cy.get(this.paymentMethod).click()
    }

    public confirmOrderFun() {
        cy.get(this.confirmOrder).click()
    }
}
export {PaymentStepPage}
