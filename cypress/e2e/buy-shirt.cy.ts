import * as pom from "../page/index";

const menuContentPage = new pom.MenuContentPage();
const productsListPage = new pom.ProductsListPage(1);
const shopingCartPage = new pom.ShopingCartPage();
const loginPage = new pom.LoginPage("aperdomobo@gmail.com", "WorkshopProtractor");
const addressStepPage = new pom.AddressStepPage();
const shippingStepPage = new pom.ShippingStepPage();
const paymentStepPage = new pom.PaymentStepPage();
const confirmationPage = new pom.ConfirmationPage();

describe("Buy a t-shirt", () => {
  it("finds t-shirt button and clicks on it", ()=>{
    // Goes to page
    menuContentPage.visitMenuContentPage();

    // Finds t-shirt button and clicks it
    menuContentPage.goToTShirtMenu();

    // Hovers over product to show add to cart button
    productsListPage.hoverOnProduct();

    // Finds add to cart button and clicks it
    productsListPage.addToCart();
    // Clicks on Proceed to checkout button (different page than before)
    shopingCartPage.clickProceed();

    // Inserts login information and clicks on login
    loginPage.enterEmail();
    loginPage.enterPasswd();
    loginPage.loginButtonFun();

    // Clicks on Proceed to checkout button at address stage
    addressStepPage.checkout();

    // Checks checkbox to agree on terms
    shippingStepPage.clickCheckbox();
    // Clicks on Proceed to checkout at shipping stage
    shippingStepPage.checkoutFun();

    // Selects payment method
    paymentStepPage.selectPaymentMethod();
    // Confirms order
    paymentStepPage.confirmOrderFun();

    // Checks order was completed
    confirmationPage.checksConfirmation();
  });
});
