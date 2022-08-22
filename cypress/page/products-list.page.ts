class ProductsListPage {
    private addToCartButton: string
    private addToCartButtonContainer: string
    private addToCartButtonText: string

    constructor() {
        this.addToCartButton = "#layer_cart > .clearfix > div:nth-child(2) > .button-container > a"
        this.addToCartButtonContainer = ".product-container > .right-block > .button-container"
        this.addToCartButtonText = "Add to cart"
    }

    public addToCart(productNumber: number) {
        cy.get(`.product_list > li:nth-child(${productNumber})`).trigger("mouseover")
        cy.get(this.addToCartButtonContainer).contains(this.addToCartButtonText).click().then((popUp) => {
            // Clicks on Proceed to checkout button
            cy.get(this.addToCartButton).click()
          })
    }
}
export {ProductsListPage}
