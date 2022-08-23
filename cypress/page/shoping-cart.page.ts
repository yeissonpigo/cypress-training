class ShopingCartPage {

    private checkoutButton : string
    
    constructor() {
        this.checkoutButton = "#center_column > .cart_navigation.clearfix > a"
    }

    public clickProceed() {
        cy.get(this.checkoutButton).click();
    }
}

export {ShopingCartPage}

