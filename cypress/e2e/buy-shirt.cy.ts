import {MenuContentPage, ProductsListPage, ShopingCartPage, LoginPage, AddressStepPage, ShippingStepPage} from "../page/index";

const menuContentPage = new MenuContentPage()
const productsListPage = new ProductsListPage(1)
const shopingCartPage = new ShopingCartPage()
const loginPage = new LoginPage("aperdomobo@gmail.com", "WorkshopProtractor")
const addressStepPage = new AddressStepPage()
const shippingStepPage = new ShippingStepPage()

describe("Buy a t-shirt", () => {
  it("finds t-shirt button and clicks on it", ()=>{
    // Goes to page
    menuContentPage.visitMenuContentPage()

    // Finds t-shirt button and clicks it
    menuContentPage.goToTShirtMenu()

    // Hovers over product to show add to cart button
    productsListPage.hoverOnProduct()

    // Finds add to cart button and clicks it
    productsListPage.addToCart()
    // Clicks on Proceed to checkout button (different page than before)
    shopingCartPage.clickProceed()

    // Inserts login information and clicks on login
    loginPage.enterEmail()
    loginPage.enterPasswd()
    loginPage.loginButtonFun()

    // Clicks on Proceed to checkout button at address stage
    addressStepPage.checkout()

    // Checks checkbox to agree on terms
    shippingStepPage.clickCheckbox()
    // Clicks on Proceed to checkout at shipping stage
    shippingStepPage.checkoutFun()

    // Selects payment method
    cy.get("a.bankwire").click()
    // Confirms order
    cy.get("#center_column > form > p > button[type=\"submit\"]").click()

    // Checks order was completed
    cy.get(".cheque-indent > strong").should("have.text", "Your order on My Store is complete.")
  });
});
