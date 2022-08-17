describe("Buy a t-shirt", () => {
  it("finds t-shirt button and clicks on it", ()=>{
    // Goes to page
    cy.visit("http://automationpractice.com/index.php");

    // Finds t-shirt button and clicks it
    cy.get("#block_top_menu > ul > li").eq(2).children('a').click()

    // Hovers over product to show add to cart button
    cy.get('.product_list > li:nth-child(1)').trigger('mouseover')
    // Finds add to cart button and clicks it
    cy.get('.product-container > .right-block > .button-container').contains('Add to cart').click().then((popUp) => {
        // Clicks on Proceed to checkout button  
        cy.wait(5000)
        cy.get('#layer_cart > .clearfix > div:nth-child(2) > .button-container > a').click()
    })

    //Clicks on Proceed to checkout button (different page than before)
    
  });
});
