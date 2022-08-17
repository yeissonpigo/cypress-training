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

    // Clicks on Proceed to checkout button (different page than before)
    cy.get('#center_column > .cart_navigation > a:nth-child(1)').click()

    // Inserts login information and clicks on login
    cy.get("#email").type("aperdomobo@gmail.com")
    cy.get("#passwd").type("WorkshopProtractor")
    cy.get('#SubmitLogin').click()

    // Clicks on Proceed to checkout button at address stage
    cy.get('button[name="processAddress"]').click()

    // Checks checkbox to agree on terms
    cy.get('#cgv').click()
    // Clicks on Proceed to checkout at shipping stage
    cy.get('#form > p > button[name="processCarrier"]').click()

    // Selects payment method
    cy.get('a.bankwire').click()
    // Confirms order
    cy.get('#center_column > form > p > button[type="submit"]').click()

    // Checks order was completed
    cy.get('.cheque-indent > strong').should('have.text', 'Your order on My Store is complete.')
  });
});
