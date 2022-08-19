class ProductsListPage {
    private productNumber: number
    private addToCartButton: string
    private addToCartButtonContainer: string
    private addToCartButtonText: string

    constructor(productNumber: number) {
        this.productNumber = productNumber
        this.addToCartButton = "#layer_cart > .clearfix > div:nth-child(2) > .button-container > a"
        this.addToCartButtonContainer = ".product-container > .right-block > .button-container"
        this.addToCartButtonText = "Add to cart"
    }

    public hoverOnProduct() {
        cy.get(`.product_list > li:nth-child(${this.productNumber})`).trigger("mouseover")
    }

    public addToCart() {
        cy.get(this.addToCartButtonContainer).contains(this.addToCartButtonText).click().then((popUp) => {
            // Clicks on Proceed to checkout button
            cy.get(this.addToCartButton).click()
          })
    }
}
export {ProductsListPage}
