class ShopingCartPage {

    private checkoutButton : string
    
    constructor() {
        this.checkoutButton = "p.cart_navigation > a[title='Proceed to checkout']"
    }

    public clickProceed() {
        cy.get(this.checkoutButton).click();
    }
}

export {ShopingCartPage}

