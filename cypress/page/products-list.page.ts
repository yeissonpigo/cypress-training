class ProductsListPage {

    private proceedToCheckoutButton: string
    private addToCartButtonContainer: string
    private itemsContainer: string

    constructor() {
        this.proceedToCheckoutButton = "a[title='Proceed to checkout']"
        this.addToCartButtonContainer = "a[title='Add to cart']"
        this.itemsContainer = ".product_list"
    }

    private getProductByName(productName: string) {
        return cy.get(this.itemsContainer).filter(`:contains("${productName}")`)
    }

    public addToCart(productName: string) {
        this.getProductByName(productName).trigger("mouseover")
        cy.get(this.addToCartButtonContainer).click().then(() => {
            // Clicks on Proceed to checkout button
            cy.get(this.proceedToCheckoutButton).click()
        })
    }
}
export { ProductsListPage }
