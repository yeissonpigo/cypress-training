describe("Buy a t-shirt", () => {
  it("finds t-shirt button and clicks on it", ()=>{
    // Goes to page
    cy.visit("http://automationpractice.com/index.php");

    // Finds t-shirt button and clicks it
    cy.get("#block_top_menu > ul > li").eq(2).children('a').click()

    // Hovers over product to show add to cart button
    cy.get('.product_list > li:nth-child(1)').trigger('mouseover')
    // Finds add to cart button and clicks it
    cy.get('.product-container > .right-block > .button-container').contains('Add to cart').click()
  });
});
