describe("Buy a t-shirt", () => {
  it("finds t-shirt button and clicks on it", ()=>{
    // Goes to page
    cy.visit("http://automationpractice.com/index.php");

    // Finds t-shirt button
    cy.get("#block_top_menu>ul>li").eq(2).children('a').click();
  });
});
