class AddressStepPage {

    private checkoutButton: string

    constructor() {
        this.checkoutButton = "button[name='processAddress']"
    }

    public checkout() {
        return this.checkoutButton
    }
}

export {AddressStepPage}
