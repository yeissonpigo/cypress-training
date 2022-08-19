class ShopingCartPage {

    private checkoutButton : string
    
    constructor() {
        this.checkoutButton = "#center_column > .cart_navigation > a:nth-child(1)"
    }

    public clickProceed() {
        cy.get(this.checkoutButton).click();
    }
}

export {ShopingCartPage}

