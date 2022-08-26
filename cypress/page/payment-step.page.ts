class PaymentStepPage {
    
    private paymentMethod: string
    private confirmOrder: string

    constructor() {
        this.paymentMethod = "a.bankwire"
        this.confirmOrder = "#cart_navigation > button.button.btn[type='submit']"
    }

    public selectPaymentMethod() {
        return this.paymentMethod
    }

    public confirmOrderFun() {
        return this.confirmOrder
    }
}
export {PaymentStepPage}
