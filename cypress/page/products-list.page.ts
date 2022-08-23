class ProductsListPage {
    private proceedToCheckoutButton: string
    private addToCartButtonContainer: string

    constructor() {
        this.proceedToCheckoutButton = "#layer_cart > .clearfix > .layer_cart_cart > .button-container > a.btn-default"
        this.addToCartButtonContainer = ".product-container > .right-block > .button-container"
    }

    public addToCart(productNumber: number, buttonText: string) {
        cy.get(`.product_list > li:nth-child(${productNumber})`).trigger("mouseover")
        cy.get(this.addToCartButtonContainer).contains(buttonText).click().then(() => {
            // Clicks on Proceed to checkout button
            cy.get(this.proceedToCheckoutButton).click()
          })
    }
}
export {ProductsListPage}
