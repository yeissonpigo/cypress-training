class ProductsListPage {
    
    private proceedToCheckoutButton: string
    private addToCartButtonContainer: string
    private productContainer(productNumber: number){
        return `.product_list > li:nth-child(${productNumber})`
    }

    constructor() {
        this.proceedToCheckoutButton = "a[title='Proceed to checkout']"
        this.addToCartButtonContainer = "a[title='Add to cart']"
    }

    public addToCart(productNumber: number) {
        cy.get(this.productContainer(productNumber)).trigger("mouseover")
        cy.get(this.addToCartButtonContainer).click().then(() => {
            // Clicks on Proceed to checkout button
            cy.get(this.proceedToCheckoutButton).click()
          })
    }
}
export {ProductsListPage}
